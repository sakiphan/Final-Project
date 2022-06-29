import React from 'react';
import { connect } from 'react-redux';
import Header from './Container/Header';

const Orders = ({list}) => {
  return (
    <div>
      <Header/>
      <center>
        {list.length>0 ?
          <div className='container'>
              <div className='row' >
                {list.map((item)=>(
                    <div className='col-md-4' style={{padding:'5px'}}  key={item.id}>
                        <div className="card mt-4 "  style={{width:"18rem",padding:"4px"}}>
                          <img src={item.url} className='card-img-top '/>
                            <div className='card-body'>
                              <div className='card-title'>{item.name}</div>
                              <div className='card-text'>Rs.{item.price}</div>
                              <p>Table Number : {item.table_number}</p>
                            </div>
                        </div>
                    </div> 
                ))}
              </div>
          </div>
          :
          <div className='h4'>
            No orders placed
          </div>
        }
      </center>
    </div>
  )
}

const mapStateToProps = state =>({
  list : state.orderreducer
})

export default connect(mapStateToProps)(Orders);
