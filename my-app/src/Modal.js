export default function Modal({isvisible}) {
    if(isvisible) {
        return(
            <div id="modal">
                <div id="modal-content">
                <h1 style={{
             fontSize: "50px",
            color: "#6C0345",
            backgroundColor: "white",
            padding: "40px",
            textAlign: "center",
            width: "110%",
        }}>The Form Has Been Submitted Successfully</h1>
            </div>
        </div>
            )
    } else {
        return (<></>)
    }
}