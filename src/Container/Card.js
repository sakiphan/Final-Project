import React from 'react';
import {connect} from 'react-redux';
import { addorder, resetfilter, resettablenumber } from '../Actions/actions';

const Card = ({filter_name,addorder,table_number}) => {
  const [data,setData] = React.useState([])
  const [cloneData,setCloneData] = React.useState([]);
  React.useEffect(()=>{
        fetch('https://sample-5bbd9-default-rtdb.firebaseio.com/.json').then(
            response => response.json()
        ).then(
          json => {
            setData(json.items);
            setCloneData(json.items);
          })
  },[])

  React.useEffect(()=>{
      if(filter_name != "All Items"){
        let specific = cloneData.filter(item => item.category === filter_name);
        setData(specific);
      }else{
        console.log('not filtered')
      }
  },[filter_name])

  const Handler = async (id,name,price,url) => {
      if(table_number != null){
        await addorder(id,name,price,table_number,url)
        await resettablenumber
        await resetfilter
        alert('Order placed sucessfully')
      }else{
        alert('Please select the Table Number')
      }
  }


  return (
    <div>
      <center>
        {data.length>0 ?
          <div className='container'>
              <div className='row' >
                {data.map((item)=>(
                    <div className='col-md-4' style={{padding:'5px'}}  key={item.id}>
                        <div className="card mt-4 "  style={{width:"18rem",padding:"4px"}}>
                        <img src={item.url} className='card-img-top '/>
                        <div className='card-body'>
                            <div className='card-title'>{item.name}</div>
                            <div className='card-text'>Rs.{item.price}</div>
                            <button className='btn btn-primary' 
                            onClick={()=>Handler(item.id,item.name,item.price,item.url)}>Order</button>
                        </div>
                        </div>
                    </div> 
                ))}
              </div>
          </div>
          :
          <div className='spinner-border text-primary'>
            <h4>No Items </h4>
          </div>
        }
      </center>
    </div>
  )
}
const mapStateToProps = state =>({
  filter_name : state.filterreducer.filter_name,
  table_number : state.tablereducer.table_number
})

export default connect(mapStateToProps,{addorder})(Card);
