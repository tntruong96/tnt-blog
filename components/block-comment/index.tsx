
import type { IComment } from 'interfaces/post.interface';
import moment from 'moment';
import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react';
import { getCommentProcess } from 'services/comments';
import { CommentContainer, CommentItem } from './style';

type Props = {
    readonly slug: string,
    readonly reload: boolean,
    readonly setLoading:  React.Dispatch<React.SetStateAction<boolean>>;
}

const BlockComment: React.FC<Props> = ({slug, reload, setLoading}) => {
    const [comments, setComments] = useState<IComment[]>([]);
    const [countComment, setCountComment] = useState<number>(0);
    const router = useRouter();
    useEffect(() => {
        getComment();
    }, [reload, router])

    const getComment = () => {
        getCommentProcess(slug).then(res => {
            if(res){
                setComments(res)
                setCountComment(res.length);
                setLoading(false);
            }
        });
    }

    return (
       <CommentContainer className='bg-slate-200 rounded-md'>
           <h1 className='text-2xl font-semibold'>{countComment ? countComment : ''} Comments</h1>
           {
               comments.map( comment => (
                   <CommentItem key={comment.id}>
                       <h2 className='text-2xl font-semibold'>{comment.name}</h2>
                       <p className='text-xs'>{moment(comment.createdAt).format("MMM DD, YYYY")}</p>
                       <p className='text-xl'>{comment.comment}</p>
                   </CommentItem>
               ))
           }
       </CommentContainer>
    );
};

export default BlockComment;