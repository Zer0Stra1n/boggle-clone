import React from 'react';
import ReactDOM from 'react-dom';
import { Footer } from './components/layout/footer/footer';
import { Header } from './components/layout/header/header';
import { Game } from './components/game/game';
import './styles/main.scss';
import './index.scss';

export const App: React.FC<{}> = () => {
    return (
        <>
            <Header />
            <main className="container">
                <Game/>
            </main>
            <Footer />
        </>
    )
};

ReactDOM.render(<App />, document.getElementById('root'));

