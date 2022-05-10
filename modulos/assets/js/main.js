import { mostraCidadeHobie, mostraNomeIdade } from './functions.js';
import { mudaCor } from './mudaCor.js';
import { BTN } from './variables.js';

mostraNomeIdade('Isaac', 26)
mostraCidadeHobie('Natal', 'Jiu-Jitsu')

BTN.addEventListener('click', mudaCor)