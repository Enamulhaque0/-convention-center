import React from 'react';
import Hook from "../Hooks/CoustomHook"
import ReviewCard from "../ReviewCard/ReviewCard"
import "./Reviews.css"

const Reviews = () => {
    const [loadDatas, setloadDatas] = Hook()
    return (

        <div className='container-rvi'>
            {
                loadDatas.map(loadData => <ReviewCard key={loadData._id}loadData={loadData}></ReviewCard>)
            }
            
        </div>
    );
};

export default Reviews;