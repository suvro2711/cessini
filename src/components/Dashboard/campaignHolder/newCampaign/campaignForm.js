import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom'
import store from '../../../../store/store'
import { storeCampaign } from '../../../../actions'
import axios from 'axios'

const CampForm = ({ newCampaignData, setNewCampaignData }) => {
    const [emailCSV, setEmailCSV] = useState([])

    useEffect(() => {
        setEmailCSV(store.getState().emailList)
    })
    // store.subscribe(() => {

    // })

    const options = emailCSV ? emailCSV.map(list =>
        <option key={list.id} value={list.id}>{list.name}</option>
    ) : null;

    const { push } = useHistory(null)
    return (
        <>
            <div className="topNavCam  subWrapperCam">
                {/* <div className="createCamp   topButtonsCam subWrapperCam"
                    onClick={() => push("/dashboard")}
                >
                    Back
                </div> */}
                {/* <div className="addEmailList topButtonsCam subWrapperCam">
                    <p>Save & Next</p>
                </div> */}

            </div>
            <div className="dashBodyMainCam  subWrapperCam">
                <div className="camFormHolder">
                    <form className="formFields  Fields">
                        <div className="leftFields Fields">
                            <div className="subField Fields">
                                <label htmlFor="camName">Campaign Name</label>
                                <input value={newCampaignData.campName} type="text" id="camName" name="camName"
                                    onChange={e => setNewCampaignData({ ...newCampaignData, campName: e.target.value })}
                                />
                            </div>
                            <div className="subField Fields">
                                <label htmlFor="SenderName">Sender Name</label>
                                <input value={newCampaignData.senderName} type="text" id="SenderName" name="SenderName"
                                    onChange={e => setNewCampaignData({ ...newCampaignData, senderName: e.target.value })}
                                />
                            </div>
                            <div className="subField Fields">
                                <label htmlFor="emailSub">Email Subject</label>
                                <input value={newCampaignData.emailSub} type="text" id="emailSub" name="camName"
                                    onChange={e => setNewCampaignData({ ...newCampaignData, emailSub: e.target.value })}
                                />
                            </div>
                        </div>
                        <div className="rightFields Fields">
                            <div className="subField Fields">
                                <label htmlFor="SenderEmail">Sender Email</label>
                                <input value={newCampaignData.senderEmail} type="text" id="SenderEmail" name="SenderEmail"
                                    onChange={e => setNewCampaignData({ ...newCampaignData, senderEmail: e.target.value })}
                                />
                            </div>
                            <div className="subFieldLong Fields">
                                <label htmlFor="emailList">Email Attachment</label>
                                {/* <select id="camName" name="camName">
                                <option value="NoEmailList">Please Create Email List</option>
                            </select> */}
                                <input type="file" id="emailList"
                                    onChange={e => setNewCampaignData({ ...newCampaignData, emailAttachment: e.target.files[0] })}
                                />
                            </div>
                            {/* <div className="subFieldLong Fields">*/}
                            {/* <label htmlFor="emailBody">Email Body</label> */}
                            {/* <select id="camName" name="camName">
                                <option value="NoEmailList">Please Create Email List</option>
                            </select> */}
                            {/* <div id="emailBody" className="desBody Fields formButtonsCam"
                                    onClick={() => push("/dashboard/newcamp/maileditor")}
                                >
                                    Deisgn Body
                                </div> */}
                            {/* </div> */}
                            <div className="subField Fields">
                                <label htmlFor="emailLists">Email List</label>
                                <select id="camName" name="camName"
                                    onChange={e => setNewCampaignData({ ...newCampaignData, emailListCVS: e.target.value })}
                                >
                                    {options}
                                </select>
                            </div>
                        </div>
                    </form>
                    <div className="formButtons Fields">
                        <div className="sendButton Fields formButtonsCam"
                            onClick={() => {
                                push("/dashboard")
                            }}
                        >
                            Back{/* {update ? "Update & Send" : "Save & Send"} */}
                        </div>
                        <div className="createButton Fields formButtonsCam"
                            onClick={() => {
                                push("/dashboard/newcamp/maileditor")
                            }
                            }
                        >
                            Next {/* {update ? "Update & Exit" : "Save & Exit"} */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CampForm;