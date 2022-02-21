import '../styles/style.scss';
import {setBackgroundImages} from './backgrounds';
import {lazyLoad} from './lazy-load';
import nav from './nav';

lazyLoad();
nav();
setBackgroundImages();
