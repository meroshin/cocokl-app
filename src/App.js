import { useState, useRef } from 'react';
import html2canvas from 'html2canvas';
import './App.css';
import headerImage from './assets/COCO-KERALA-header.png'; 

function App() {
  const [name, setName] = useState('Jaimy Joseph');
  const [phone, setPhone] = useState('+91 9048244527');
  const [email, setEmail] = useState('jaimy.cocokerala.com');
  const [desig, setDesig] = useState('Managing Director & CEO');
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const footerRef = useRef(null);

  const handleImageLoad = () => {
    setIsImageLoaded(true);
  };

  const copyFooterHTML = () => {
    const footerElement = footerRef.current;
    const footerHTML = footerElement.innerHTML;
    navigator.clipboard.writeText(footerHTML).then(() => {
      alert('Footer HTML copied to clipboard!');
    }, () => {
      alert('Failed to copy footer HTML to clipboard.');
    });
  };

  const onSubmits = (event) => {
    event.preventDefault();

    if (isImageLoaded) {
      setTimeout(() => {
        const footerElement = footerRef.current;
        html2canvas(footerElement, { scale: 2 }).then((canvas) => {
          canvas.toBlob((blob) => {
            const item = new ClipboardItem({ 'image/png': blob });
            navigator.clipboard.write([item]).then(() => {
              alert('Image copied to clipboard!');
            }, () => {
              alert('Failed to copy image to clipboard.');
            });
          });
        });
      }, 500);
    } else {
      alert('Please try again.');
    }
  };
  const inputEvent = (event) => {
    setName(event.target.value);
  };
  const inputEventemail = (event) => {
    setEmail(event.target.value);
  };
  const inputEventphone = (event) => {
    setPhone(event.target.value);
  };
  const inputEventdesig = (event) => {
    setDesig(event.target.value);
  };

  return (
    <div className="App">
      <style>
        {`
          .container {
            max-width: 600px;
            margin: 0 auto;
          }
          .footer {
            text-align: center;
            color: #000;
          }
          .header-img img {
            width: 100%;
            height: auto;
          }
   
          form {
            margin: 20px 0;
            padding: 10px;
            background-color: #f0f0f0;
            border: 1px solid #ccc;
            border-radius: 5px;
          }
          label {
            font-weight: bold;
            margin-bottom: 5px;
            display: block;
          }
          input[type="text"], input[type="email"], input[type="number"] {
            width: 100%;
            padding: 8px;
            margin-bottom: 10px;
            box-sizing: border-box;
            border: 1px solid #ccc;
            border-radius: 4px;
          }
          input[type="submit"], input[type="button"] {
            background-color: #4caf50;
            color: white;
            padding: 10px 20px;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            font-size: 16px;
            margin-top: 10px;
          }
          input[type="submit"]:hover, input[type="button"]:hover {
            background-color: #45a049;
          }
            .btn-html
            {
              background-color: #088395;
            color: white;
            padding: 10px 20px;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            font-size: 16px;
            margin-top: 10px;
            margin: 0 5px;
            }
        `}
      </style>
      <div className="container">
        <footer className="footer" id="footer" ref={footerRef} style={{ textAlign: 'center', color: '#000' }}>
          <section>
            <div className="header-img">
              <img
                src={headerImage}
                alt="COCO-KERALA-header"
                onLoad={handleImageLoad}
                style={{ width: '100%', height: 'auto', lineHeight:'.1'}}
              />
            </div>
          </section>

          <section className="footer-section" style={{ margin: '2px 0', padding: '0 5px', marginTop:'-20px'}}>
            <div className="row" id="row" style={{ display: 'flex', justifyContent: 'space-between' }}>
              <div className="col left-font" id="left-font" style={{ width: '55%', textAlign: 'left', overflow: 'hidden' }}>
                <h6 style={{ textTransform: 'uppercase', fontWeight: 800, marginBottom: '5px' }}>{name}</h6>

                <p style={{ margin: '5px 0', fontSize: '10px' }}>{desig}</p>
                <p style={{ margin: '5px 0', fontSize: '10px' }}>Phone: {phone}</p>
                <p style={{ margin: '5px 0', fontSize: '10px' }}>Email: {email}</p>
              </div>

              <div className="col left-font" id="left-font" style={{ width: '55%', textAlign: 'left' }}>
                <h6 style={{ textTransform: 'uppercase', fontWeight: 800, marginBottom: '5px' }}>Corporate Office</h6>
                <p style={{ margin: '5px 0', fontSize: '10px', lineHeight:'1.3' }}>
                  2nd Floor K C Tower, Padavattom Ernakulam - 682024, Kerala, India
                </p>
                <p style={{ margin: '5px 0', fontSize: '10px' }}>Phone: +91 9048200074</p>
                <p style={{ margin: '5px 0', fontSize: '10px' }}>Email: info@cocokerala.com</p>
                <p style={{ margin: '5px 0', fontSize: '10px' }}>Website: www.cocokerala.com</p>
              </div>

              <div className="col right-font" id="right-font" style={{ width: '55%', marginTop: '25px', marginLeft:'30px', textAlign: 'left' }}>
                <p style={{ margin: '2px 0', fontSize: '8px' }}>Mumbai: +91 9048200085</p>
                <p style={{ margin: '2px 0', fontSize: '8px' }}>Kolkata: +91 9048299978</p>
                <p style={{ margin: '2px 0', fontSize: '8px' }}>Delhi: +91 9048200086</p>
                <p style={{ margin: '2px 0', fontSize: '8px' }}>Surat: +91 9048200025</p>
                <p style={{ margin: '2px 0', fontSize: '8px' }}>Pune: +91 9048200084</p>
                <p style={{ margin: '2px 0', fontSize: '8px' }}>Karnataka & Tamilnadu: +91 8714615177</p>
                <p style={{ margin: '2px 0', fontSize: '8px' }}>MP & Chhattisgarh: +91 8714627900</p>
              </div>

              <div className="col right-font" id="right-font" style={{ width: '40%', marginTop: '25px', textAlign: 'right' }}>
                <p style={{ margin: '2px 0', fontSize: '8px' }}>Ahmedabad: +91 9048200072</p>
                <p style={{ margin: '2px 0', fontSize: '8px' }}>Hyderabad: +91 8714612103</p>
                <p style={{ margin: '2px 0', fontSize: '8px' }}>Lucknow: +91 8714669774</p>
                <p style={{ margin: '2px 0', fontSize: '8px' }}>Rajkot: +91 8714669771</p>
                <p style={{ margin: '2px 0', fontSize: '8px' }}>Nagpur: +91 9048200073</p>
              </div>
            </div>
          </section>

          <div className="footer-bottom" style={{ backgroundColor: '#a9cf38', padding: '8px 0', fontWeight: 'bold', fontSize: '12px' }}>
            Approved by Dept. of Tourism, Govt. of India | Since year 2000
          </div>
        </footer>
      </div>

      <div className="container">
        <form onSubmit={onSubmits}>
          <label>
            Name:
            <input type="text" onChange={inputEvent} />
          </label>
          <label>
           Designation:
            <input type="text" onChange={inputEventdesig} />
          </label>
          <label>
            Phone:
            <input type="number" onChange={inputEventphone} />
          </label>
          <label>
            Email:
            <input type="email"  onChange={inputEventemail} />
          </label>
        
          <br />
          <input type="submit" value="Copy Image" />
          <button className='btn-html' onClick={copyFooterHTML}>Copy HTML</button>
        </form>

       
      </div>
    </div>
  );
}

export default App;
