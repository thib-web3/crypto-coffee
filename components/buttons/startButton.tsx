import type { NextPage } from 'next'
import { useState } from 'react'

import styles from '../../styles/components/startButton.module.css'

import { useContext } from 'react'
import { ModalContext } from '../contexts/ModalContext'
import toast from 'react-hot-toast'

const StartInput: NextPage = () => {
    const [modalOpen, setModalOpen] = useState(false)
    const handleModal = () => {
        if (valProps.val.length == 0) {
            return toast.error("Please enter your name")
        }

        else if (valProps.val.length < 2) {
            return toast.error("Please enter at least 2 characters")

        }
        else if (valProps.val.length > 14) {
            return toast.error("Please enter less than 14 characters")
        }
        else {
            openModal({ name: valProps.val })

        }
    }

    const { modalOpened, openModal, valProps } = useContext(ModalContext)
    return (
        <button className={styles.container} onClick={handleModal} data-splitbee-event="Create Button Click">


            <div className={styles.text}>Create my page</div>
        </button>
    )
}

export default StartInput
