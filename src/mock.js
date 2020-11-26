import auto from './img/autorenewal.svg';
import dnsSvg from './img/dns.svg';
import businesscardSvg from './img/businesscard.svg';
import certificateSvg from './img/certificate.svg';
import cloudSvg from './img/cloud.svg';
import freesslSvg from './img/freessl.svg';
import dnssecSvg from './img/dnssec.svg';
import redirectSvg from './img/redirect.svg';
import uploadSvg from './img/upload.svg';
import waitSvg from './img/wait.svg';
import okSvg from './img/ok.svg';

export const featuresData = [{
  imgSrc: businesscardSvg,
  text: 'Сайт-визитка',
},{
  imgSrc: dnsSvg,
  text: 'Поддержка DNS',
},{
  imgSrc: certificateSvg,
  text: 'Сертификат о владении доменом',
},{
  imgSrc: auto,
  text: 'Автопродление',
},{
  imgSrc: cloudSvg,
  text: 'Облачное хранилище на 20 гб',
},{
  imgSrc: freesslSvg,
  text: 'Бесплатный SSL-сертификат',
},{
  imgSrc: dnssecSvg,
  text: 'DNSEC в один клик',
},{
  imgSrc: redirectSvg,
  text: 'Перенаправление',
}];

export const FILE_MAX_SIZE = 5*1000*1000;

export const profileData = [
  {
    svg: okSvg,
    status: 'Проверено',
  },
  {
    svg: waitSvg,
    status: 'Идет проверка',
  },
  {
    svg: uploadSvg,
    status: 'Отклонено',
  },
];

export const welcomeData = {
  offerTop: 'только до 31 января',
  offerTitle: 'Честная цена <br/>за домен .RU - 39 руб.',
  textRegister: 'Зарегистрировать за 39 рублей',
};

export const advantagesData = {
  text: 'Для любого вашего домена, зарегистрированного на «Джино», вы можете в несколько кликов создать простую страницу-визитку. Это удобно, если ваш основной сайт еще не готов, или если домен вам нужен только для почты. Вы можете разместить здесь краткую информацию о себе или вашем бизнесе, ссылки на аккаунты в соцсетях и любые другие сайты. Создание и поддержка базового варианта сайта-визитки абсолютно бесплатны.'
};

