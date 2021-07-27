import { useState } from 'react';




interface Landing {
    uid: string;
    name: string;
}

export const Landing = () => {

    const [landing, setLanding] = useState<Landing>();

    const login = () => {
        setLanding({
            uid: 'ABC123',
            name: 'Marina Benitez Sanchez'
        });
    }

    return (
        <div className="mt-2">
            <h3>ENTRA EN TU BLOG DE VIAJES FAVORITO:</h3>

            <button
                onClick={ login }
                className="btn btn-outline-primary">
                Haz CLick
            </button>

        </div>
    )
}