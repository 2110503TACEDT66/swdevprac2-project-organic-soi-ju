'use client'

export default function InteractiveCard({children}:{ children: React.ReactNode}){
    
    function onCardMouseAction(event: React.SyntheticEvent){
        if(event.type == 'mouseover'){
            event.currentTarget.classList.remove('shadow-lg', 'bg-jason');
            event.currentTarget.classList.remove('h-[300px]', 'w-[90%]');
            event.currentTarget.classList.add('shadow-2xl', 'bg-white');
            event.currentTarget.classList.add('h-[350px]', 'w-[92%]');
        }else{
            event.currentTarget.classList.remove('shadow-2xl','bg-white');
            event.currentTarget.classList.remove('h-[350px]', 'w-[92%]');
            event.currentTarget.classList.add('shadow-lg','bg-jason');
            event.currentTarget.classList.add('h-[300px]', 'w-[90%]');
        }
    }

    return(
        <div className="flex flex-row w-[90%] h-[300px] m-5 p-5 shadow-md rounded bg-jason text-primary"
        onMouseOver={(e)=>onCardMouseAction(e)} onMouseOut={(e)=>onCardMouseAction(e)}>
            {children}
        </div>
    );
}