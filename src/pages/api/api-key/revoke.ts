import { withMedthods } from "@/lib/api-middlewares/with-methods";
import { authOptions } from "@/lib/auth";
import { db } from "@/lib/db";
import { RevokeApiData } from "@/types/api";
import { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth";
import { z } from "zod";

const handler = async (req:NextApiRequest,res:NextApiResponse<RevokeApiData>) => {
    try {
        const user = await getServerSession(req,res,authOptions).then((result)=>result?.user)
    if(!user){
        return res.status(401).json({error:"Unauthorized",success:false})
    }
    const validApiKey = await db.apiKey.findFirst({
        where:{userId:user.id,enabled:true}
    })
    if(!validApiKey){
        return res.status(500).json({error:"This apiKey could not be revoked",success:false})
    }
    await db.apiKey.update({
        where:{id:validApiKey.id},
        data:{enabled:false}
    })
    return res.status(200).json({error:null,success:true})
    } catch (err) {
         if(err instanceof z.ZodError){
            res.status(400).json({error:err.issues,success:false})
         }
         res.status(500).json({error:"Internal Server Error",success:false})
    }
}

export default withMedthods(["POST"],handler)