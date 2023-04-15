import { useState } from 'react';
/* eslint-disable jsx-a11y/anchor-is-valid */
import { useTheme } from 'styled-components';

import Image from 'next/image';

import cx from 'classnames';

import { Container, Card, FloatIcon, Article, List } from '@/styles/home';

import { RiSearchLine } from 'react-icons/ri';
import { TfiHeadphoneAlt } from 'react-icons/tfi';
import { FiDownloadCloud } from 'react-icons/fi';
import { AiOutlineGoogle, AiOutlineMenu } from 'react-icons/ai';
import { TbBrandNytimes } from 'react-icons/tb';
import { FaAirbnb } from 'react-icons/fa';
import { SiNasa, SiUber, SiEtsy } from 'react-icons/si';
import { BsBoxArrowUpRight } from 'react-icons/bs';
import { VscChromeClose } from 'react-icons/vsc';
import {
  FcLock,
  FcLike,
  FcStatistics,
  FcAssistant,
  FcBriefcase,
  FcAdvertising,
} from 'react-icons/fc';

import Brand from '@/assets/img/brand.png';
import RightSide from '@/assets/img/right.png';

import Arc from '@/assets/img/arc.png';
import Line from '@/assets/img/line.png';
import Line2 from '@/assets/img/line2.png';
import Star from '@/assets/img/star.png';
import Cross from '@/assets/img/cross.png';
import bg from '@/assets/img/bg.png';
import articlebg from '@/assets/img/articlebg.png';
import Door from '@/assets/img/door.png';
import Triangules from '@/assets/img/triangules.png';

import Card1 from '@/assets/img/card1.png';
import Card2 from '@/assets/img/card2.png';
import Card3 from '@/assets/img/card3.png';

import Article1 from '@/assets/img/article1.png';
import Article2 from '@/assets/img/article2.png';
import Article3 from '@/assets/img/article3.png';
import Illustration from '@/assets/img/illustration.png';

import Logo from '@/assets/img/logo.png';

import YoutubeIcon from '@/assets/img/youtube.svg';
import LinkedInIcon from '@/assets/img/linkedin.svg';
import TwitterIcon from '@/assets/img/twitter.svg';
import FacebookIcon from '@/assets/img/facebook.svg';

export default function Home() {
  const [toggle, setToggle] = useState(false);

  const { colors } = useTheme();

  const CardComponent = ({
    image,
    icon,
    order = 0,
    title,
    desc,
    button,
  }: {
    icon: any;
    image: any;
    title: string;
    desc: string;
    button: string;
    order?: number;
  }) => {
    return (
      <Card order={order}>
        <div className={`image ` + cx(order === 1 ? 'b-left' : 'b-right')}>
          <Image src={image} alt="" />
        </div>
        <div className={`info ` + cx(order === 0 ? 'b-left' : 'b-right')}>
          <p className="title">{title}</p>

          <p className="desc">{desc}</p>

          <button className="border">
            {button} <BsBoxArrowUpRight size={20} />
          </button>
        </div>
        <Image className="float-image desktop-only" src={icon} alt="" />
      </Card>
    );
  };

  const FloatIconComponent = ({ Icon }: { Icon: any }) => {
    return (
      <FloatIcon className="desktop-only">
        <Icon size={20} />
        <span>12</span>
      </FloatIcon>
    );
  };

  const ArticleComponent = ({
    image,
    title,
    desc,
  }: {
    image: any;
    title: string;
    desc: string;
  }) => {
    return (
      <Article>
        <Image src={image} alt="" />
        <div className="info">
          <p className="title">{title}</p>
          <p className="desc">{desc}</p>
        </div>
        <a href="#" className="ml-auto">
          Leia mais {'>'}
        </a>
      </Article>
    );
  };

  const ListComponent = ({ itens }: { itens: string[] }) => {
    return (
      <List>
        {itens.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </List>
    );
  };
  return (
    <Container>
      <header className="b-bottom">
        <div className="logo b-right">
          <Image src={Brand} alt="" />
        </div>
        <nav className={'menu ' + cx({ toggle })}>
          <VscChromeClose
            onClick={() => setToggle(false)}
            className="close mobile-only"
            size={30}
          />

          <ul>
            <li>Produtos</li>
            <li>Soluções</li>
            <li>Empreendimento</li>
            <li>Recursos</li>
            <li>Preços</li>
          </ul>

          <aside className="mobile-only">
            <button className="sales-button b-top b-bottom">
              <TfiHeadphoneAlt size={20} />
              <span>Falar com vendas</span>
            </button>

            <button className="sign-button ">Entrar / Cadastrar</button>
          </aside>
        </nav>

        <aside>
          <button className="search-button b-right b-left desktop-only">
            <RiSearchLine size={20} />
          </button>
          <button className="sales-button desktop-only">
            <TfiHeadphoneAlt size={20} />
            <span>Falar com vendas</span>
          </button>

          <button className="sign-button desktop-only">
            Entrar / Cadastrar
          </button>

          <button
            onClick={() => setToggle((state) => !state)}
            className="burguer-menu mobile-only border"
          >
            <AiOutlineMenu size={30} />
          </button>
        </aside>
      </header>

      <main>
        <div className="banner">
          <aside className="left">
            <div className="container">
              <h2>
                Um excelente trabalho em equipe começa com um
                <span> HQ digital</span>
              </h2>
              <p>
                Com todo o seu pessoal, ferramentas e comunicação em um só
                lugar, você pode trabalhar com mais rapidez e flexibilidade do
                que nunca.
              </p>
              <div className="buttons">
                <button className="btn-email">Entrar com email</button>
                <button className="btn-google border">
                  <AiOutlineGoogle size={20} /> Entrar com google
                </button>
              </div>
            </div>
          </aside>
          <aside className="right b-left">
            <Image src={RightSide} alt="" />
          </aside>
        </div>
        <div className="banner2 b-top b-bottom">
          <h2>
            <Image className="arc" src={Arc} alt="" />
            CONFIADO POR EMPRESAS <p>NO MUNDO TODO</p>
            <Image className="line" src={Line} alt="" />
          </h2>
          <ul>
            <li>
              <FaAirbnb size={60} />
            </li>
            <li>
              <TbBrandNytimes size={60} />
            </li>
            <li>
              <SiNasa size={60} />
            </li>
            <li>
              <SiUber size={60} />
            </li>
            <li>
              <SiEtsy size={60} />
            </li>
          </ul>
        </div>

        <div
          style={{
            backgroundImage: `url(${bg.src})`,
          }}
          className="features b-bottom"
        >
          <CardComponent
            title="Reúna sua equipe"
            desc="No coração do Slack estão os canais: espaços organizados para todos e tudo o que você precisa para trabalhar. Nos canais, é mais fácil conectar departamentos, escritórios, fusos horários e até mesmo outras empresas."
            image={Card1}
            order={0}
            button="Mais sobre canais"
            icon={Line2}
          />
          <CardComponent
            title="Escolha como você quer trabalhar"
            desc="No Slack, você tem toda a flexibilidade para trabalhar quando, onde e como for melhor para você. Você pode conversar facilmente, enviar clipes de áudio e vídeo ou participar de uma conversa ao vivo."
            image={Card2}
            order={1}
            button="Comunicação Flexível"
            icon={Star}
          />
          <CardComponent
            title="Mova-se mais rápido com suas ferramentas em um só lugar"
            desc="Com seus outros apps de trabalho conectados ao Slack, você pode trabalhar mais rápido alternando menos as guias. E com ferramentas poderosas como o Workflow Builder, você pode automatizar tarefas rotineiras."
            image={Card3}
            order={0}
            button="Saiba mais sobre os canais"
            icon={Cross}
          />
        </div>

        <div className="promo">
          <div className="icons desktop-only">
            <FloatIconComponent Icon={FcLock} />
            <FloatIconComponent Icon={FcLike} />
            <FloatIconComponent Icon={FcStatistics} />
          </div>
          <div className="main">
            <p className="title">
              Equipes <b>grandes</b> e pequenas dependem da <b>Slack</b>
            </p>
            <p className="desc">
              O Slack se expande com segurança para oferecer suporte à
              colaboração nas maiores empresas do mundo.
            </p>
          </div>
          <div className="icons desktop-only">
            <FloatIconComponent Icon={FcAssistant} />
            <FloatIconComponent Icon={FcBriefcase} />

            <FloatIconComponent Icon={FcAdvertising} />
          </div>
        </div>
        <div className="buttons">
          <button className="black-button">
            Conheça o Slack para empresas
          </button>
          <button className="outline-button border">Falar com vendas</button>
        </div>

        <div className="percentages">
          <div className="percentage">
            <p>85%</p>
            <span className="desc">
              dos usuários dizem que o Slack melhorou a comunicação*
            </span>
          </div>
          <div className="percentage">
            <p style={{ color: colors.green }}>85%</p>
            <span className="desc">
              sentem que sua capacidade de trabalhar remotamente melhorou*
            </span>
          </div>
          <div className="percentage">
            <p style={{ color: colors.blue }}>85%</p>
            <span className="desc">
              sentem-se mais conectados com suas equipes*
            </span>
          </div>
        </div>
        <div className="testimonial b-bottom">
          <div className="wrapper">
            <div className="image desktop-only">
              <Image className="float-image" src={Triangules} alt="" />
              <Image src={Door} alt="" />
            </div>
            <div className="info">
              <p className="desc">
                “Conseguimos criar uma grande rede virtual de funcionários que
                podem se comunicar como se estivessem juntos. Houve muita
                interrupção em termos de onde trabalhávamos, mas em termos de
                como trabalhávamos, muito pouca interrupção.”
              </p>

              <div className="person">
                <p className="name">Mark Smith</p>
                <p className="role">
                  Gerente de produto técnico sênior, T-Mobile
                </p>
              </div>

              <button className="outline-button border mr-auto">
                Veja mais histórias de clientes
              </button>
            </div>
          </div>
        </div>

        <article
          style={{
            backgroundImage: `url(${articlebg.src})`,
          }}
          className="articles"
        >
          <h4>
            Mergulhe <b>mais fundo</b> em uma nova maneira de trabalhar
          </h4>

          <div className="grid">
            <div className="illustration-article">
              <div className="info">
                <p className="title">Coleção</p>
                <p className="desc">Slack como você Digital HQ</p>
              </div>
              <Image src={Illustration} alt="" />
              <a href="#" className="ml-auto">
                Leia mais {'>'}
              </a>
            </div>
            <ArticleComponent
              title="Recuros"
              desc="Veja como outras pessoas estão construindo sua sede digital"
              image={Article3}
            />
            <ArticleComponent
              title="Webinar"
              desc="Vença a batalha por talentos com um QG digital"
              image={Article2}
            />
            <ArticleComponent
              title="E-book"
              desc="Reinventar o trabalho: novos imperativos para o futuro do trabalho"
              image={Article1}
            />
          </div>
        </article>
      </main>

      <footer>
        <div className="wrapper">
          <Image className="logo" src={Logo} alt="" />
          <ListComponent
            itens={[
              'Porque Slack?',
              'Slack vs. Email',
              'Canais',
              'Engajamento',
              'Escala',
              'Assita a Demo',
            ]}
          />
          <ListComponent
            itens={[
              'Produto',
              'Características',
              'Integrações',
              'Empreendimento',
              'Soluções',
            ]}
          />
          <ListComponent itens={['Preços', 'Planos', 'Pago vs. Grátis']} />
          <ListComponent
            itens={[
              'Recursos',
              'Parceiros',
              'Desenvolvedores',
              'Comunidade',
              'Apps',
              'Blog',
              'Central de Ajuda',
              'Eventos',
            ]}
          />
          <ListComponent
            itens={[
              'Empresa',
              'Sobre Nós',
              'Relações com Investidores',
              'Novidades',
              'Media Kit',
              'Carreiras',
            ]}
          />
        </div>
      </footer>
      <div className="footer">
        <div className="wrapper">
          <ul className="text">
            <li>Status</li>
            <li>Privacidade</li>
            <li>Termos</li>
            <li>Preferência de Cookies</li>
            <li> Fale Conosco</li>
          </ul>
          <ul className="icons">
            <li>
              <button>
                <FiDownloadCloud size={20} /> Download Slack
              </button>
            </li>
            <li>
              <Image src={YoutubeIcon} alt="" />
            </li>
            <li>
              <Image src={LinkedInIcon} alt="" />
            </li>
            <li>
              <Image src={FacebookIcon} alt="" />
            </li>
            <li>
              <Image src={TwitterIcon} alt="" />
            </li>
          </ul>
        </div>
      </div>
    </Container>
  );
}
