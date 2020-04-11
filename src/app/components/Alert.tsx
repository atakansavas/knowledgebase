import React, { useState, useContext, useEffect, useRef, FormEvent } from "react";
import { Button, Header, Icon, Modal } from 'semantic-ui-react'
import { AppContext } from "../contexts/Layout/Index";


type Props = {
}

export default (props: Props) => {
    const context = useContext(AppContext);
    const { alertStatus, setAlertStatus, alertContent } = context;

    function handleClose() {
        setAlertStatus(false);
    }

    return (
        <Modal
            open={alertStatus}
            onClose={handleClose}
            basic
            size='small'
        >
            <Header icon='browser' content='Alert' />
            <Modal.Content>
                <h3>{alertContent}</h3>
            </Modal.Content>
            <Modal.Actions>
                <Button color='green' onClick={handleClose} inverted>
                    <Icon name='checkmark' /> Got it
          </Button>
            </Modal.Actions>
        </Modal>
    )
}