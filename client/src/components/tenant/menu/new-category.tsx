import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Save } from "lucide-react";

interface AddNewCategoryProps {
  setOpenForm: (open: boolean) => void;
}

export default function AddNewCategory({ setOpenForm }: AddNewCategoryProps) {
  const submitHandler = (e: React.SubmitEvent) => {
    e.preventDefault();
    setOpenForm(false);
  };

  return (
    <form onSubmit={submitHandler} className="flex items-center gap-2 mt-4">
      <Input className="focus-visible:border-none focus-visible:ring-0 border-none bg-gray-100 rounded-sm" />
      <Button type="submit" className="cursor-pointer bg-secondary">
        <Save strokeWidth={2} />
      </Button>
    </form>
  );
}
