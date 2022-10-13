import React, { useEffect } from 'react'
import styled from 'styled-components';
import Player from '../molecules/Player';

type Props = {
    videoId: string;
    setShowModal: (value: React.SetStateAction<boolean>) => void;
}


const ModalWrapper = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    background: rgba(0,0,0,0.8);
    width: 100vw;
    height: 100vh;
    z-index: 5000;
`

const ModalDiv = styled.div`
    padding: 4px;
    width: 100%; 
    margin-top: 10vh;
    border: 1px solid black;
`

const Modal = ({ videoId, setShowModal }: Props) => {
    useEffect(()=>{
        const escClicked = (e: KeyboardEvent) => {
            if(e.key === 'Escape'){
                setShowModal(false);
            }
        }
        document.addEventListener('keydown',escClicked,false)
        return ()=>{
            document.removeEventListener('keydown',escClicked,false)
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <ModalWrapper>
            <ModalDiv>
                <Player videoId={videoId} />
            </ModalDiv>
        </ModalWrapper>
    )
}

export default Modal