import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Footer } from './layout/footer/footer';
import { Header } from './layout/header/header';
import './styles/main.scss';
import './index.scss';
import { Game } from './game/game';

export const App: React.FC<{}> = () => {
    useEffect(() => {
        document.title = 'Boggle-Clone'
    }, []);

    return (
        <>
            <Header title="Boggle" />
            <main className="container">
                <Game/>
            </main>
            <Footer />
        </>
    )
};

ReactDOM.render(<App />, document.getElementById('root'));

