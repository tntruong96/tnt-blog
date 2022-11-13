import React, { useRef, useEffect, useState } from "react";
import { publishComment, submitComment } from "services/comments";
import type { FormData } from "services/comments";
import { Form, FormContainer, FormField } from "./style";
import { useSpin } from "utils/useSpin";

type Props = {
  readonly slug: string;
  readonly setReload: React.Dispatch<React.SetStateAction<boolean>>;
  readonly reload: boolean;
  readonly setLoading: React.Dispatch<React.SetStateAction<boolean>>;
};

const FormComment: React.FC<Props> = ({
  slug,
  setReload,
  reload,
  setLoading,
}) => {
  const [error, setError] = useState(false);
  const emailEl = useRef<HTMLInputElement>(null);
  const nameEl = useRef<HTMLInputElement>(null);
  const commentEl = useRef<HTMLTextAreaElement>(null);

//   useEffect(() => {
//     return;
//   }, [reload]);

  const handleSubmit = async () => {
    let email = emailEl.current?.value;
    let name = nameEl.current?.value;
    let comment = commentEl.current?.value;

    const cleanFieldForm = () => {
      emailEl.current!.value = "";
      nameEl.current!.value = "";
      commentEl.current!.value = "";
    };

    if (email && name && comment) {
      const formData: FormData = { email, name, comment, slug };
      setLoading(true);
      const data = await submitComment(formData);
      if (data?.createComment?.id) {
        const wasPublished = await publishComment(data.createComment.id);
        // setLoading(false);
        setReload(!reload);
        cleanFieldForm();
      }
    } else {
      setError(true);
      return;
    }
  };

  return (
    <FormContainer className="m-4 rounded-md bg-slate-200">
      <h1 className="text-2xl font-bold">Comment Form</h1>
      <Form>
        <FormField>
          <textarea
            className="h-20 w-full rounded-md p-2"
            name="comment"
            id="comment"
            placeholder="Field Out Your Comment"
            ref={commentEl}
          ></textarea>
        </FormField>
        <FormField>
          <input
            className="w-full rounded-md p-2"
            name="name"
            id="name"
            placeholder="Field Out Your Name"
            ref={nameEl}
          ></input>
        </FormField>
        <FormField>
          <input
            className="w-full rounded-md p-2"
            name="email"
            id="email"
            placeholder="Field Out Your Email"
            ref={emailEl}
          ></input>
        </FormField>
        <div>
          <button
            type="button"
            className="rounded-lg bg-white p-2"
            onClick={handleSubmit}
          >
            Post Comment
          </button>
        </div>
      </Form>
    </FormContainer>
  );
};

export default FormComment;
