import { setData } from "@/store/setData";
import { Request } from "@/types/request";
import { formatDate } from "@/utils/formatDate";
import { useRouter } from "next/navigation";
import { useState } from "react";

export const useEquipmentForm = () => {
  const [formData, setFormData] = useState<Request>({
    name: "",
    position: "",
    equipment: "",
    justification: "",
  });

  const router = useRouter();

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const resetForm = () => {
    setFormData({ name: "", position: "", equipment: "", justification: "" });
  };

  const saveData = () => {
    const newData = { ...formData, date: formatDate(new Date()) };
    setData(newData);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    saveData();
    resetForm();
  };

  const submitAndRedirect = (e: React.FormEvent) => {
    e.preventDefault();
    saveData();
    router.push("/");
  };

  return {
    formData,
    handleInputChange,
    handleSubmit,
    submitAndRedirect,
  };
};
