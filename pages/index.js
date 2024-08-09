const styles = {
    body: {
        fontFamily: 'Arial, sans-serif',
        backgroundColor: '#ece5dd',
        color: '#333',
        margin: 0,
        padding: 0,
    },
    header: {
        backgroundColor: '#075e54',
        color: 'white',
        padding: '10px 20px',
        textAlign: 'center',
    },
    section: {
        margin: '20px',
        padding: '20px',
        backgroundColor: '#ffffff',
        borderRadius: '8px',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    },
    h2: {
        color: '#25d366',
    },
    message: {
        maxWidth: '70%',
        marginBottom: '10px',
        padding: '10px',
        borderRadius: '15px',
        position: 'relative',
    },
    messageImg: {
        maxWidth: '100%',
        height: 'auto',
        borderRadius: '8px',
    },
    messageSent: {
        backgroundColor: '#dcf8c6',
        marginLeft: 'auto',
    },
    messageReceived: {
        backgroundColor: '#ffffff',
        marginRight: 'auto',
        boxShadow: '0 0 5px rgba(0, 0, 0, 0.2)',
    },
    footer: {
        backgroundColor: '#075e54',
        color: 'white',
        textAlign: 'center',
        padding: '10px 0',
        position: 'fixed',
        bottom: 0,
        width: '100%',
    },
};

function Home() {
    return (
        <>
            <header style={styles.header}>
                <title>CasaDoPapai</title>
                <h1>Memórias na Casa do Papai</h1>
            </header>

            <section style={styles.section}>
                <h2 style={styles.h2}>Dia 1: O Maximilian</h2>
                <p>Meu pai ao ver os felinos recuados quis mostrar quem era o dono deles o resultado está abaixo</p>
                <img src="https://oimpacto.com.br/wp-content/uploads/2022/05/MAO-DECEPADA-OFICIAL.jpg" alt="após esse dia ele não consegue mais segurar o max na mão" style={styles.messageImg} />
            </section>

            <section style={styles.section}>
                <h2 style={styles.h2}>Dia 2: O Rúgido</h2>
                <p>A manhã começou com meu pai tentado voltar com dominança de macho alfa, mas dessa vez sem contato físico, ao final do vídeo vemos que o felino grande e gordo solta seu rugido de dominância</p>
                <video controls style={styles.messageImg}>
                    <source src="https://i.imgur.com/p20mkrg.mp4" type="video/mp4" />
                    Seu navegador não suporta o elemento de vídeo.
                </video>
                <p>Além disso, foi um dia de nostalgia rever o local que passei a maior parte da minha vida e ver quanto mudou foi no mínimo interessante</p>
                <video controls style={styles.messageImg}>
                    <source src="https://i.imgur.com/b6tLpNu.mp4" type="video/mp4" />
                    Seu navegador não suporta o elemento de vídeo.
                </video>
            </section>

            <section style={styles.section}>
                <h2 style={styles.h2}>Dia 3: O Hipertenso em uma caminhada</h2>
                <p>um homem gordo e hipertenso encontrou seu fim trágico após uma extenuante maratona de... 10 minutos de caminhada lenta. A jornada épica, comparável a uma escalada no Everest, provou ser demais para o destemido herói, que desafiou os limites da resistência humana ao tentar mover-se em um ritmo que beirava o insuportável.

Testemunhas afirmam que a velocidade era tamanha que folhas caídas no chão passavam debaixo de seus pés em câmera lenta. Especialistas em esportes extremos já consideram incluir a "Caminhada Lenta de 10 Minutos" como modalidade nos próximos Jogos Olímpicos.

Enquanto isso, o caso reabre o debate sobre os perigos de atividades físicas intensas para a população acima do peso. Afinal, quem poderia imaginar que mover-se a passos de tartaruga poderia ser tão arriscado? </p>
                <video controls style={styles.messageImg}>
                    <source src="https://i.imgur.com/iiFPWyb.mp4" type="video/mp4" />
                    Seu navegador não suporta o elemento de vídeo.
                </video>
            </section>
            <section style={styles.section}>
                <h2 style={styles.h2}>Dia 4: Eu sou chei de saúde MAN</h2>
                <p>O dia pode ser resumido com os audios abaixo: (teorias dizem que juan só ficou doente porcausa das artimanhas do Maximilian)</p>
                <h1></h1>
                <div class="message sent">
                <iframe src="https://audiomack.com/embed/juanmatheusbrazfreire/song/aud-20240809-wa0019" scrolling="no" width="100%" height="252" frameborder="0" title="AUD-20240809-WA0019"></iframe>
                <iframe src="https://audiomack.com/embed/juanmatheusbrazfreire/song/aud-20240809-wa0021opus" scrolling="no" width="100%" height="252" frameborder="0" title="AUD-20240809-WA0021.opus"></iframe>

        </div>
            </section>
            <section style={styles.section}>
                <h2 style={styles.h2}>Dia 5: is time to say goodbye</h2>
                <p>O Dia ainda não acabou, estou escrevendo nesse vídeo obrigado pai e te vejo segunda, vídeo de 1:00 min do max com medo de mim para fins curiosidade</p>
                <video controls style={styles.messageImg}>
                    <source src="https://i.imgur.com/KKOOLm6.mp4" type="video/mp4" />
                    Seu navegador não suporta o elemento de vídeo.
                </video>
            </section>
            

            <footer style={styles.footer}>
                <p>&copy; 1782 Memórias na Casa do Papai. Todos os direitos reservados ao IBAMA.</p>
            </footer>
        </>
    );
}

export default Home;