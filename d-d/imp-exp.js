import axios from 'axios'; 
import React,{Component} from 'react'; 
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import Upload from './upload';


class ImpExp extends Component { 
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
		<div className='file'> 
			<div className="upload"> 
               
            <DropdownButton variant="light" title="Download">
                 <Dropdown.Item onClick={(e)=>this.handleUpload(e)} >Download</Dropdown.Item>
            </DropdownButton>
            </div>
            <div className='download'>
            <DropdownButton variant="light" title="Upload">
                 <Dropdown.Item  href="/upload" target="_blank" id="upload"><Upload/></Dropdown.Item>
            </DropdownButton>
            </div>

           </div>

	); 
	} 
} 

export default ImpExp; 
