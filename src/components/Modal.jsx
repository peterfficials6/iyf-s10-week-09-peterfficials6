import useToggle from '../Hsooks/useToggle';

function Modal() {
    const [isOpen, { toggle, setFalse }] = useToggle(false);

    return (
        <div>
            <button onClick={toggle}>Open Modal</button>
            
            {isOpen && (
                <div className="modal-overlay" onClick={setFalse}>
                    <div className="modal" onClick={e => e.stopPropagation()}>
                        <h3>Modal Title</h3>
                        <p>This is modal content!</p>
                        <button onClick={setFalse}>Close</button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Modal;