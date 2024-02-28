import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { ClockCircleFilled, ClockCircleTwoTone, CommentOutlined, HddTwoTone, MailOutlined, MailTwoTone, MessageTwoTone, MobileOutlined, MobileTwoTone, UserOutlined } from '@ant-design/icons';
import Person2TwoToneIcon from '@mui/icons-material/Person2TwoTone';
import AccountCircleTwoToneIcon from '@mui/icons-material/AccountCircleTwoTone';
import 'leaflet/dist/leaflet.css';
import './inputForm.css'


const InputForm = () => {
    return (
        <div className='if'>
            <div className='if-input'>
                <h2>REQUEST CALL BACK</h2>
                <p>PLEASE FILL YOUR DETAILS BELOW</p>
                <div className='if-input-form'>
                    <div className='if-input-form-row'>
                        <div className='if-input-form-container'>
                            <div className='if-input-form-abs'>
                                <UserOutlined style={{ color: "#1677FF" }} />
                            </div>
                            <input placeholder='First Name' className='input' />
                        </div>

                        <div className='if-input-form-container'>
                            <div className='if-input-form-abs'>
                                <UserOutlined style={{ color: "#1677FF" }} />
                            </div>
                            <input placeholder='Last Name' className='input' />
                        </div>
                    </div>

                    <div className='if-input-form-row'>

                        <div className='if-input-form-container'>
                            <div className='if-input-form-abs'>
                                {/* <CommentOutlined /> */}
                                <MobileTwoTone />
                            </div>
                            <input placeholder='Mobile No' className='input' />
                        </div>

                        <div className='if-input-form-container'>
                            <div className='if-input-form-abs'>
                                {/* <MailOutlined /> */}
                                <MailTwoTone />
                            </div>
                            <input placeholder='Email' className='input' />
                        </div>
                    </div>

                    <div className='if-input-form-row'>

                        <div className='if-input-form-container'>
                            <div className='if-input-form-abs'>
                                {/* <MobileOutlined /> */}
                                <ClockCircleTwoTone />
                            </div>
                            <input placeholder='Date' className='input' />
                        </div>

                        <div className='if-input-form-container'>
                            <div className='if-input-form-abs'>

                                {/* <ClockCircleFilled /> */}
                                {/* <ClockCircleTwoTone /> */}
                                {/* <AppstoreOutlined /> */}
                                <HddTwoTone />
                            </div>
                            <input placeholder='Interested in' className='input' />
                        </div>
                    </div>

                    <div className='if-input-form-row'>

                        <div className='if-input-form-container'>
                            <div className='if-input-form-abs'>
                                {/* <MobileOutlined /> */}
                                {/* <ClockCircleTwoTone /> */}
                                <MessageTwoTone />
                            </div>
                            <input placeholder='Message' className='input' />
                        </div>
                    </div>

                    <button>Contact us</button>
                </div>
            </div>
            <MapContainer
                className="markercluster-map"
                center={[29.300723, 76.321906]}
                zoom={14}
                maxZoom={17}
            >

                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                <Marker position={[29.300723, 76.321906]}>
                    <Popup>
                        A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                </Marker>
            </MapContainer>
        </div>
    )
}

export default InputForm
