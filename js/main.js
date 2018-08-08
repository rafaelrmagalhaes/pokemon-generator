let moveCount = 0;
let abilityCount = 0;
let elementCount = 0;
let voiceCount = 0;
let lootCount = 0;

function copy() {
    const copyText = document.getElementById("code").textContent;
    const textArea = document.createElement('textarea');
    textArea.textContent = copyText;
    document.body.append(textArea);
    textArea.select();
    document.execCommand("copy");
}

// MOVES
function addMove() {
    moveCount++;
    
    const wrapper = document.createElement('div');
    wrapper.setAttribute('id', `move${moveCount}`);

    const moves = document.getElementById('moves');
    moves.appendChild(wrapper);
    
    const label = document.createElement('label');
    label.setAttribute('class', 'mr-2');
    label.innerHTML = `Move ${moveCount}`;

    const name = document.createElement('input');
    name.setAttribute('type', 'text');
    name.setAttribute('id', `move${moveCount}Name`);
    name.setAttribute('placeholder', 'Name');

    const learn = document.createElement('input');
    learn.setAttribute('type', 'number');
    learn.setAttribute('id', `move${moveCount}Learn`);
    learn.setAttribute('placeholder', 'Chance to learn');

    const cast = document.createElement('input');
    cast.setAttribute('type', 'number');
    cast.setAttribute('id', `move${moveCount}Cast`);
    cast.setAttribute('placeholder', 'Chance to cast');
    
    wrapper.appendChild(label);
    wrapper.appendChild(name);
    wrapper.appendChild(learn);
    wrapper.appendChild(cast);
}

function removeMove() {
    if(moveCount < 1) return;

    const wrapper = document.getElementById('moves');
    const lastMove = document.getElementById(`move${moveCount}`);

    wrapper.removeChild(lastMove);
    moveCount--;
}

// ABILITIES
function addAbility() {
    abilityCount++;
    
    const wrapper = document.createElement('div');
    wrapper.setAttribute('id', `ability${abilityCount}`);

    const abilities = document.getElementById('abilities');
    abilities.appendChild(wrapper);
    
    const label = document.createElement('label');
    label.setAttribute('class', 'mr-2');
    label.innerHTML = `Ability ${abilityCount}`;

    const select = document.createElement('select');
    select.setAttribute('id', `select_ability${abilityCount}`);
    select.insertAdjacentHTML('beforeend', 
        '<option value="cut">Cut</option>\
         <option value="flash">Flash</option>\
         <option value="fly">Fly</option>\
         <option value="headbutt">Headbutt</option>\
         <option value="light">Light</option>\
         <option value="rock smash">Rock Smash</option>\
         <option value="surf">Surf</option>');

    const learn = document.createElement('input');
    learn.setAttribute('type', 'number');
    learn.setAttribute('id', `ability${abilityCount}Learn`);
    learn.setAttribute('placeholder', 'Chance to learn');
    
    wrapper.appendChild(label);
    wrapper.appendChild(select);
    wrapper.appendChild(learn);
}

function removeAbility() {
    if(abilityCount < 1) return;

    const wrapper = document.getElementById('abilities');
    const lastAbility = document.getElementById(`ability${abilityCount}`);

    wrapper.removeChild(lastAbility);
    abilityCount--;
}

// ELEMENTS
function addElement() {
    elementCount++;
    
    const wrapper = document.createElement('div');
    wrapper.setAttribute('id', `element${elementCount}`);

    const elements = document.getElementById('elements');
    elements.appendChild(wrapper);
    
    const percent = document.createElement('input');
    percent.setAttribute('type', 'number');
    percent.setAttribute('id', `percent_element${elementCount}`);
    percent.setAttribute('placeholder', 'Percent');

    const selectDif = document.createElement('select');
    selectDif.setAttribute('id', `select_dif_element${elementCount}`);
    selectDif.insertAdjacentHTML('beforeend', 
        '<option value="-">less damage from</option>\
         <option value="">more damage against</option>');

    const selectElement = document.createElement('select');
    selectElement.setAttribute('id', `select_element${elementCount}`);
    selectElement.insertAdjacentHTML('beforeend', 
        '<option value="bugPercent">Bug</option>\
         <option value="darkPercent">Dark</option>\
         <option value="dragonPercent">Dragon</option>\
         <option value="electricPercent">Electric</option>\
         <option value="fairyPercent">Fairy</option>\
         <option value="fightingPercent">Fighting</option>\
         <option value="firePercent">Fire</option>\
         <option value="flyingPercent">Flying</option>\
         <option value="ghostPercent">Ghost</option>\
         <option value="grassPercent">Grass</option>\
         <option value="groundPercent">Ground</option>\
         <option value="icePercent">Ice</option>\
         <option value="normalPercent">Normal</option>\
         <option value="poisonPercent">Poison</option>\
         <option value="psychicPercent">Psychic</option>\
         <option value="rockPercent">Rock</option>\
         <option value="steelPercent">Steel</option>\
         <option value="waterPercent">Water</option>');
    
    wrapper.appendChild(percent);
    wrapper.appendChild(selectDif);
    wrapper.appendChild(selectElement);
}

function removeElement() {
    if(elementCount < 1) return;

    const wrapper = document.getElementById('elements');
    const lastElement = document.getElementById(`element${elementCount}`);

    wrapper.removeChild(lastElement);
    elementCount--;
}

// VOICES
function addVoice() {
    voiceCount++;

    const wrapper = document.createElement('div');
    wrapper.setAttribute('id', `voice${voiceCount}`);

    const voices = document.getElementById('voices');

    if(voiceCount === 1) {
        const interval = document.createElement('input');
        interval.setAttribute('type', 'number');
        interval.setAttribute('id', 'voiceInterval');
        interval.setAttribute('placeholder', 'Interval');

        const chance = document.createElement('input');
        chance.setAttribute('type', 'number');
        chance.setAttribute('id', 'voiceChance');
        chance.setAttribute('placeholder', 'Chance');

        voices.appendChild(interval);
        voices.appendChild(chance);
    }
    
    voices.appendChild(wrapper);
    
    const sentence = document.createElement('input');
    sentence.setAttribute('type', 'text');
    sentence.setAttribute('id', `sentence${voiceCount}`);
    sentence.setAttribute('placeholder', `Sentence ${voiceCount}`);

    wrapper.appendChild(sentence);
}

function removeVoice() {
    if(voiceCount < 1) return;

    const wrapper = document.getElementById('voices');
    const lastVoice = document.getElementById(`voice${voiceCount}`);

    wrapper.removeChild(lastVoice);

    if(voiceCount === 1) {
        const interval = document.getElementById('voiceInterval');
        const chance = document.getElementById('voiceChance');

        wrapper.removeChild(interval);
        wrapper.removeChild(chance);
    }

    voiceCount--;
}

// LOOTS
function addLoot() {
    lootCount++;

    const wrapper = document.createElement('div');
    wrapper.setAttribute('id', `loot${lootCount}`);

    const loots = document.getElementById('loots');    
    loots.appendChild(wrapper);
    
    const itemID = document.createElement('input');
    itemID.setAttribute('type', 'number');
    itemID.setAttribute('id', `id_item${lootCount}`);
    itemID.setAttribute('placeholder', 'Item ID');

    const chance = document.createElement('input');
    chance.setAttribute('type', 'number');
    chance.setAttribute('id', `chance_item${lootCount}`);
    chance.setAttribute('placeholder', 'Chance');

    const countMax = document.createElement('input');
    countMax.setAttribute('type', 'number');
    countMax.setAttribute('id', `countmax_item${lootCount}`);
    countMax.setAttribute('placeholder', 'Countmax');

    wrapper.appendChild(itemID);
    wrapper.appendChild(chance);
    wrapper.appendChild(countMax);
}

function removeLoot() {
    if(lootCount < 1) return;

    const wrapper = document.getElementById('loots');
    const lastLoot = document.getElementById(`loot${lootCount}`);

    wrapper.removeChild(lastLoot);

    lootCount--;
}

function generateXML() {
    let code = document.getElementById("code");

    // info
    let pokemon = document.getElementById("pokemon").value || "Pokémon";
    let number = document.getElementById("number").value || 1;
    let description = document.getElementById("description").value || "a Pokémon";
    let exp = document.getElementById("exp").value || 0;
    let catchRate = document.getElementById("catchRate").value || 0;

    let type = document.getElementById("type").value || 1;
    let corpse = document.getElementById("corpse").value || 1;
    let charged = document.getElementById("charged").value || 1;
    let discharged = document.getElementById("discharged").value || 1;
    let portrait = document.getElementById("portrait").value || 1;

    let spawn = document.getElementById("spawn").value;
    let targetChangeInterval = document.getElementById("targetChangeInterval").value || 0;
    let targetChangeChance = document.getElementById("targetChangeChance").value || 0;
    let weight = document.getElementById("weight").value || 1;
    let height = document.getElementById("height").value || 1;

    // shiny
    let shinyChance = document.getElementById("shinyChance").value || 0;
    let shinyType = document.getElementById("shinyType").value || 1;
    let shinyCorpse = document.getElementById("shinyCorpse").value || 1;
    let shinyCharged = document.getElementById("shinyCharged").value || 1;
    let shinyDischarged = document.getElementById("shinyDischarged").value || 1;
    let shinyPortrait = document.getElementById("shinyPortrait").value || 1;

    // evolution
    let evolutionAt = document.getElementById("evolutionAt").value;
    let evolutionTo = document.getElementById("evolutionTo").value || "pokemon";
    let stoneID = document.getElementById("stoneID").value || 1;

    // types
    let firstType = document.getElementById("firstType").value;
    let secondType = document.getElementById("secondType").value;

    // genders
    let male = document.getElementById("male").value || 0;
    let female = document.getElementById("female").value || 0;

    // base stats
    let hp = document.getElementById("hp").value || 1;
    let atk = document.getElementById("atk").value || 1;
    let def = document.getElementById("def").value || 1;
    let spatk = document.getElementById("spatk").value || 1;
    let spdef = document.getElementById("spdef").value || 1;
    let spd = document.getElementById("spd").value || 1;

    // flags
    let staticattack = document.getElementById("staticattack").value || 0;
    let runonhealth = document.getElementById("runonhealth").value || 0;

    let flags = `&lt;flags>`;

    if(document.getElementById("pushable").checked) {
        flags += `
        &lt;flag pushable="1" />`;
    }

    if(document.getElementById("canpushitems").checked) {
        flags += `
        &lt;flag canpushitems="1" />`;
    }

    if(document.getElementById("canpushcreatures").checked) {
        flags += `
        &lt;flag canpushcreatures="1" />`;
    }

    if(document.getElementById("canwalkonenergy").checked) {
        flags += `
        &lt;flag canwalkonenergy="1" />`;
    }

    if(document.getElementById("canwalkonfire").checked) {
        flags += `
        &lt;flag canwalkonfire="1" />`;
    }

    if(document.getElementById("catchable").checked) {
        flags += `
        &lt;flag catchable="1" />`;
    }

    if(document.getElementById("attackable").checked) {
        flags += `
        &lt;flag attackable="1" />`;
    }

    if(document.getElementById("hostile").checked) {
        flags += `
        &lt;flag hostile="1" />`;
    }

    if(document.getElementById("illusionable").checked) {
        flags += `
        &lt;flag illusionable="1" />`;
    }

    if(document.getElementById("convinceable").checked) {
        flags += `
        &lt;flag convinceable="1" />`;
    }

    if(document.getElementById("targetdistance").checked) {
        flags += `
        &lt;flag targetdistance="1" />`;
    }

    flags += `
        &lt;flag staticattack="${staticattack}" />
        &lt;flag runonhealth="${runonhealth}" />
    &lt;/flags>`;

    // moves
    let moves = `&lt;moves>`;
    if(moveCount > 0) {
        for(let i = 1; i <= moveCount; i++){
            let name = document.getElementById(`move${i}Name`).value || `Move ${i}`;
            let learn = document.getElementById(`move${i}Learn`).value || 0;
            let cast = document.getElementById(`move${i}Cast`).value || 0;

        moves += `
        &lt;move name="${name}" chanceToLearn="${learn}" chanceToCast="${cast}" />`;
        }
    }
    moves += `
    &lt;/moves>`;

    // abilities
    let abilities = `&lt;abilities>`;
    if(abilityCount > 0) {
        for(let i = 1; i <= abilityCount; i++){
            let name = document.getElementById(`select_ability${i}`).value;
            let learn = document.getElementById(`ability${i}Learn`).value || 0;

        abilities += `
        &lt;ability name="${name}" chanceToLearn="${learn}" />`;
        }
    }
    abilities += `
    &lt;/abilities>`;

    // elements
    let elements = `&lt;elements>`;
    if(elementCount > 0) {
        for(let i = 1; i <= elementCount; i++){
            let percent = document.getElementById(`percent_element${i}`).value || 1;
            let selectDif = document.getElementById(`select_dif_element${i}`).value;
            let select = document.getElementById(`select_element${i}`).value;

        elements += `
        &lt;element ${select}="${selectDif}${percent}" />`;
        }
    }
    elements += `
    &lt;/elements>`;

    // voices
    let voices = '&lt;voices';
    if(voiceCount > 0) {
        let interval = document.getElementById('voiceInterval').value || 0;
        let chance = document.getElementById('voiceChance').value || 0;
        voices += ` interval="${interval}" chance="${chance}">`;

        for(let i = 1; i <= voiceCount; i++){
            let sentence = document.getElementById(`sentence${i}`).value || "Sentence";

        voices += `
        &lt;voice name="${sentence}" />`;
        }
    } else {
        voices += '>';
    }
    voices += `
    &lt;/voices>`;

    // loots
    let loots = `&lt;loots>`;
    if(lootCount > 0) {
        for(let i = 1; i <= lootCount; i++){
            let itemID = document.getElementById(`id_item${i}`).value || 1;
            let chance = document.getElementById(`chance_item${i}`).value || 0;
            let countMax = document.getElementById(`countmax_item${i}`).value || 1;

        loots += `
        &lt;item id="${itemID}" chance="${chance}" countmax="${countMax}" />`;
        }    
    }
    loots += `
    &lt;/loots>`;

    // immunities
    let immunities = `&lt;immunities>`;
    
    if(document.getElementById("immunity_bug").checked) {
        immunities += `
        &lt;immunity bug="1" />`;
    }

    if(document.getElementById("immunity_dark").checked) {
        immunities += `
        &lt;immunity dark="1" />`;
    }

    if(document.getElementById("immunity_dragon").checked) {
        immunities += `
        &lt;immunity dragon="1" />`;
    }

    if(document.getElementById("immunity_eletric").checked) {
        immunities += `
        &lt;immunity eletric="1" />`;
    }

    if(document.getElementById("immunity_fairy").checked) {
        immunities += `
        &lt;immunity fairy="1" />`;
    }

    if(document.getElementById("immunity_fighting").checked) {
        immunities += `
        &lt;immunity fighting="1" />`;
    }

    if(document.getElementById("immunity_fire").checked) {
        immunities += `
        &lt;immunity fire="1" />`;
    }

    if(document.getElementById("immunity_flying").checked) {
        immunities += `
        &lt;immunity flying="1" />`;
    }

    if(document.getElementById("immunity_ghost").checked) {
        immunities += `
        &lt;immunity ghost="1" />`;
    }

    if(document.getElementById("immunity_grass").checked) {
        immunities += `
        &lt;immunity grass="1" />`;
    }

    if(document.getElementById("immunity_ground").checked) {
        immunities += `
        &lt;immunity ground="1" />`;
    }

    if(document.getElementById("immunity_ice").checked) {
        immunities += `
        &lt;immunity ice="1" />`;
    }

    if(document.getElementById("immunity_normal").checked) {
        immunities += `
        &lt;immunity normal="1" />`;
    }

    if(document.getElementById("immunity_poison").checked) {
        immunities += `
        &lt;immunity poison="1" />`;
    }

    if(document.getElementById("immunity_psychic").checked) {
        immunities += `
        &lt;immunity psychic="1" />`;
    }

    if(document.getElementById("immunity_rock").checked) {
        immunities += `
        &lt;immunity rock="1" />`;
    }

    if(document.getElementById("immunity_steel").checked) {
        immunities += `
        &lt;immunity steel="1" />`;
    }

    if(document.getElementById("immunity_water").checked) {
        immunities += `
        &lt;immunity water="1" />`;
    }

    immunities += `
    &lt;/immunities>`;

    code.innerHTML = 
`&lt;?xml version="1.0" encoding="ISO-8859-1"?>
&lt;pokemon number="${number}" name="${pokemon}" nameDescription="${description}" experience="${exp}" catchRate="${catchRate}" weight="${weight}" height="${height}">
    &lt;look type="${type}" corpse="${corpse}" />
    &lt;icon charged="${charged}" discharged="${discharged}" />
    &lt;portrait id="${portrait}" />
    &lt;spawn at="${spawn}" />
    &lt;targetchange interval="${targetChangeInterval}" chance="${targetChangeChance}" />
    &lt;shiny chance="${shinyChance}">
        &lt;look type="${shinyType}" corpse="${shinyCorpse}" />
        &lt;icon charged="${shinyCharged}" discharged="${shinyDischarged}" />
        &lt;portrait id="${shinyPortrait}" />
    &lt;/shiny>
    &lt;evolutions>
        &lt;evolution to="${evolutionTo}" at="${evolutionAt}" stone="${stoneID}" />
    &lt;/evolutions>
    &lt;type first="${firstType}" ${secondType ? `second="${secondType}" />` : '/>'}
    &lt;genders>
        &lt;gender name="male" percentage="${male}" />
        &lt;gender name="female" percentage="${female}" />
    &lt;/genders>
    &lt;basestats>
        &lt;hp value="${hp}" />
        &lt;attack value="${atk}" />
        &lt;defense value="${def}" />
        &lt;specialAttack value="${spatk}" />
        &lt;specialDefense value="${spdef}" />
        &lt;speed value="${spd}" />
    &lt;/basestats>
    ${flags}
    ${moves}
    ${abilities}
    ${elements}
    ${voices}
    ${loots}
    ${immunities}
&lt;/pokemon>`;

location.href = "#wrapper-code";
copy();
}