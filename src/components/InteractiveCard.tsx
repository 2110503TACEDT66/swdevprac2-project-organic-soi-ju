'use client'

export default function InteractiveCard({children}:{ children: React.ReactNode}){
    
    function onCardMouseAction(event: React.SyntheticEvent){
        if(event.type == 'mouseover'){
            event.currentTarget.classList.remove('shadow-lg');
            // event.currentTarget.classList.remove('h-[300px]', 'w-[90%]');
            event.currentTarget.classList.add('shadow-2xl');
            // event.currentTarget.classList.add('h-[350px]', 'w-[92%]');
        }else{
            event.currentTarget.classList.remove('shadow-2xl');
            // event.currentTarget.classList.remove('h-[350px]', 'w-[92%]');
            event.currentTarget.classList.add('shadow-lg');
            // event.currentTarget.classList.add('h-[300px]', 'w-[90%]');
        }
    }

    return(
        <div className="flex flex-col w-[75%] lg:w-[18%] h-[50vh] m-5  shadow-md rounded bg-jason text-primary hover:shadow-lg  transition-all"
        onMouseOver={(e)=>onCardMouseAction(e)} onMouseOut={(e)=>onCardMouseAction(e)}>
            {children}
        </div>
    );
}