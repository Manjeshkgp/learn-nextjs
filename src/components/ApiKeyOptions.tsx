"use client";

import { FC, useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/DropdownMenu";
import Button from "./ui/Button";
import { Loader2 } from "lucide-react";
import { toast } from "./ui/Toast";
import { useRouter } from "next/navigation";
import { createApiKey } from "@/helpers/create-api-key";
import { revokeApiKey } from "@/helpers/revoke-api-key";

interface ApiKeyOptionsProps {
  apiKeyKey: string;
  apiKeyId: string;
}

const ApiKeyOptions: FC<ApiKeyOptionsProps> = ({ apiKeyId, apiKeyKey }) => {
    const router = useRouter();
  const [isCreatingNew, setIsCreatingNew] = useState<boolean>(false);
  const [isRevoking, setIsRevoking] = useState<boolean>(false);
  const createNewApiKey = async () => {
    setIsCreatingNew(true)
    try {
      await revokeApiKey({keyId:apiKeyId})
      await createApiKey()
      router.refresh()
    } catch (error) {
      toast({
        title: 'Error creating new API key',
        message: 'Please try again later.',
        type: 'error',
      })
    } finally {
      setIsCreatingNew(false)
    }
  }

  const revokeCurrentApiKey = async () => {
    setIsRevoking(true)
    try {
      await revokeApiKey({keyId:apiKeyId})
      router.refresh()
    } catch (error) {
      toast({
        title: 'Error revoking your API key',
        message: 'Please try again later.',
        type: 'error',
      })
    } finally {
      setIsRevoking(false)
    }
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger disabled={isCreatingNew || isRevoking} asChild>
        <Button
          variant="ghost"
          className="flex gap-2 items-center"
          isLoading={false}
        >
          <p>
            {isCreatingNew
              ? "Creating new key"
              : isRevoking
              ? "Revoking Key"
              : "Options"}
          </p>
          {isCreatingNew || isRevoking ? (
            <Loader2 className="animate-spin h-4 w-4" />
          ) : null}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem
          onClick={() => {
            navigator.clipboard.writeText(apiKeyKey);
            toast({
              title: "Copied",
              message: "API Key Copied Successfully",
              type: "success",
            });
          }}
        >
          Copy
        </DropdownMenuItem>
        <DropdownMenuItem onClick={createNewApiKey}>Create New API Key</DropdownMenuItem>
        <DropdownMenuItem onClick={revokeCurrentApiKey}>Revoke API Key</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ApiKeyOptions;
