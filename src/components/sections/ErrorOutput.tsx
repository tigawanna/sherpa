interface ErrorOutputProps {
error:Error
}

export function ErrorOutput(error:ErrorOutputProps){
return (
 <div className='w-full flex items-center justify-center'>
        <div>{error.error.message}</div>
 </div>
);
}
