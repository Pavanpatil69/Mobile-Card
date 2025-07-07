import React from 'react'

class Additem extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            productname: "",
            productprice: "",
        }
    }
    render() {
      return (
        <form className='row mb-5'  onSubmit={(e) => {
            e.preventDefault()
            this.props.additem(this.state.productname, Number(this.state.productprice))
          }}>
          <div className="mb-3 col-4">
            <label htmlFor="inputname" className="form-label">NAME</label>
            <input type="text" className="form-control" id="inputname" aria-describedby="name" name='productname' onChange={(e)=> {
                this.setState({productname: e.currentTarget.value})
            }}
            value={this.state.productname}
            />
          </div>
          <div className="mb-3 col-4 ">
            <label htmlFor="inputprice" className="form-label">PRICE</label>
            <input type="number" className="form-control" id="price" name='productprice'onChange={(e)=> {
                this.setState({productprice: Number(e.currentTarget.value)})
            }}
            value={this.state.productprice}  
            />
          </div>
          <button type="submit" className="btn btn-primary col-2 btn-sm">Add card</button>
        </form>
      );
    }
  }
  
  export default Additem;

