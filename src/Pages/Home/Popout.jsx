import Modal from 'react-responsive-modal';

const Popout = ({open,setOpen, setReview, postReview, reviews}) => {

    return (
        <div className='modal'>
            <Modal open={open} center onClose={()=>setOpen(false)}>
                <br />
                {
                    reviews && reviews.map(item=><Card key={item._id} item={item}></Card>)
                }
                <div className='feedback'>
                    <input className='dropInput' onChange={(e)=>setReview(e.target.value)} type="text" placeholder='write your review' />
                    <button className='dropButton' onClick={postReview}>Drop</button>
                </div>
            </Modal>
        </div>
    );
};

const Card=({item})=>{
    return (
        <div className='card'>
            <div>
                <img src={item?.user?.photo} alt="" />
            </div>
            <div>
                <p>{item.feedback}</p>
            </div>
        </div>
    )
}

export default Popout;