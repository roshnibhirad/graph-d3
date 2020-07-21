import axios from 'axios'; 
import React,{Component} from 'react'; 


class Upload extends Component { 
    constructor(props) {
        super(props);
        this.state = {file: null };
      }

	handleFile(e){
       let file = e.target.files

       this.setState({file:file})

    }
    
    
    handleUpload(e){
        let file = this.state.file

        let formdata = new FormData()
        formdata.append('image',file)
        formdata.append('name'," ")

        axios({
            url: '/some/api',
            method: "POST",
            headers:{
                authorization: 'your token'
            },
            data: formdata
        }).then((res)=>{
            //handle
        },(err)=>{
            //err
        })
    }
	render() { 
	
	return ( 
        <div id="upload">
		<div className='container'>
			<div className='upload2'>            
                 <input type="file" name="file" onChange={(e)=>this.handleFile(e)} />
                 <button onClick={(e)=>this.handleUpload(e)} href="/upload">Upload</button>      
            </div>
        </div>
        </div>

	); 
	} 
} 

export default Upload; 
