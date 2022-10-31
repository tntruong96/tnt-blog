import React, { useRef, useEffect, useState }  from 'react';
import {publishComment, submitComment } from 'services/comments';
import type {FormData} from 'services/comments';
import { Form, FormContainer, FormField } from './style';

type Props = {
    readonly slug: string,
    readonly setReload: React.Dispatch<React.SetStateAction<boolean>>,
    readonly reload: boolean
}

const FormComment: React.FC<Props> = ({slug, setReload, reload}) => {
    const [error, setError] = useState(false);
    const emailEl = useRef<HTMLInputElement>(null);
    const nameEl = useRef<HTMLInputElement>(null);
    const commentEl = useRef<HTMLTextAreaElement>(null);

    useEffect(() => {
        return
    }, [reload])

    const handleSubmit = async () => {
       let email = emailEl.current?.value;
       let name = nameEl.current?.value;
       let comment = nameEl.current?.value;

       const cleanFieldForm = () => {
        email = '';
        name = '';
        comment='';

    }

       
       if(email && name && comment){
           const formData: FormData = {email, name, comment, slug}
           const data = await submitComment(formData);
           if(data?.createComment?.id){
               const wasPublished = await publishComment(data.createComment.id);
               setReload(!reload)
               cleanFieldForm();
           }
       } else {
           setError(true);
           return;
       }
    }

   

    return (
       <FormContainer className='bg-slate-200 m-4 rounded-md'>
           <h1 className='text-2xl font-bold'>Comment Form</h1>
           <Form >
               <FormField>
                    <textarea className='w-full rounded-md h-20 p-2' name="comment" id="comment" placeholder='Field Out Your Comment' ref={commentEl}></textarea>
               </FormField>
               <FormField>
                    <input className='w-full rounded-md p-2' name="comment" id="comment" placeholder='Field Out Your Name' ref={nameEl}></input>
               </FormField>
               <FormField>
                    <input className='w-full rounded-md p-2' name="comment" id="comment" placeholder='Field Out Your Email' ref={emailEl}></input>
               </FormField>
               <div>
                   <button type='button' className='bg-white p-2 rounded-lg' onClick={handleSubmit}>Post Comment</button>
               </div>

           </Form>
       </FormContainer>
    );
};

export default FormComment;