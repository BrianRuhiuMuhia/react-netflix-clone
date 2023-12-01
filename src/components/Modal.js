import {useState} from 'react'
export default function Modal(props)
{
    const [isActive, setIsActive] = useState(false);
    const { title, content } = props;
    return (
      <div>
        <div className="accordion border">
          <div className="accordion-item">
            <div className="accordion-title" onClick={()=>{
              setIsActive(!isActive)
            }}>
              <div>{title}</div>
              <div>{isActive ? "+":"-"}</div>
            </div>
            <div className="accordion-content">{isActive ? content:""}</div>
          </div>
        </div>
      </div>
    );
  }

