"use client";
import usePostHandleSubmit from "@/hooks/usePostHandleSubmit";
import FormContainer from "@/components/FormContainer";

export default function CreateUser() {
  const {msg, handleSubmit} = usePostHandleSubmit();

  return (
        <FormContainer type="create" action="/api/users/create/" handleSubmit={handleSubmit} user={null} msg={msg}></FormContainer>
  );
}
