"use client";

import { ButtonHTMLAttributes, FC } from "react";
import Button from "./ui/Button";
import { toast } from "./ui/Toast";
import { cn } from "@/lib/utils";
import { Copy } from "lucide-react";

interface CopyButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  valueToCopy: string;
}

const CopyButton: FC<CopyButtonProps> = ({
  valueToCopy,
  className,
  ...props
}) => {
  return (
    <Button
      onClick={() => {
        navigator.clipboard.writeText(valueToCopy);
        toast({
          title: "Copied!",
          message: "API Key copied to clipboard successfully",
          type: "success",
        });
      }}
      {...props}
      variant={"ghost"}
      className={className}
      isLoading={false}
    >
        <Copy className="h-5 w-5"/>
    </Button>
  );
};

export default CopyButton;
