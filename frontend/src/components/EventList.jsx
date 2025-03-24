// src/components/EventList.jsx



function EventList() {
    return(
        <>
            {Data.map((item,ind)=>{
                return <Button key = {ind} {...item}/>
            })}
        </>
    );
}

export default EventList;
