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
    let pushable = document.getElementById("pushable").checked;
    let canpushitems = document.getElementById("canpushitems").checked;
    let canpushcreatures = document.getElementById("canpushcreatures").checked;
    let canwalkonenergy = document.getElementById("canwalkonenergy").checked;
    let canwalkonfire = document.getElementById("canwalkonfire").checked;
    let catchable = document.getElementById("catchable").checked;
    let attackable = document.getElementById("attackable").checked;
    let hostile = document.getElementById("hostile").checked;
    let illusionable = document.getElementById("illusionable").checked;
    let convinceable = document.getElementById("convinceable").checked;
    let targetdistance = document.getElementById("targetdistance").checked;
    let staticattack = document.getElementById("staticattack").value || 0;
    let runonhealth = document.getElementById("runonhealth").value || 0;

    let flags = `&lt;flags>`;

    if(pushable) {
        flags += `
        &lt;flag pushable="1" />`;
    }

    if(canpushitems) {
        flags += `
        &lt;flag canpushitems="1" />`;
    }

    if(canpushcreatures) {
        flags += `
        &lt;flag canpushcreatures="1" />`;
    }

    if(canwalkonenergy) {
        flags += `
        &lt;flag canwalkonenergy="1" />`;
    }

    if(canwalkonfire) {
        flags += `
        &lt;flag canwalkonfire="1" />`;
    }

    if(catchable) {
        flags += `
        &lt;flag catchable="1" />`;
    }

    if(attackable) {
        flags += `
        &lt;flag attackable="1" />`;
    }

    if(hostile) {
        flags += `
        &lt;flag hostile="1" />`;
    }

    if(illusionable) {
        flags += `
        &lt;flag illusionable="1" />`;
    }

    if(convinceable) {
        flags += `
        &lt;flag convinceable="1" />`;
    }

    if(targetdistance) {
        flags += `
        &lt;flag targetdistance="1" />`;
    }

    flags += `
        &lt;flag staticattack="${staticattack}" />
        &lt;flag runonhealth="${runonhealth}" />
    &lt;/flags>`;

    // moves
    let move1Name = document.getElementById("move1Name").value;
    let move1Learn = document.getElementById("move1Learn").value || 0;
    let move1Cast = document.getElementById("move1Cast").value || 0;
    // let move2Name = document.getElementById("move2Name").value || "Move";
    // let move2Learn = document.getElementById("move2Learn").value || 0;
    // let move2Cast = document.getElementById("move2Cast").value || 0;
    // let move3Name = document.getElementById("move3Name").value || "Move";
    // let move3Learn = document.getElementById("move3Learn").value || 0;
    // let move3Cast = document.getElementById("move3Cast").value || 0;
    // let move4Name = document.getElementById("move4Name").value || "Move";
    // let move4Learn = document.getElementById("move4Learn").value || 0;
    // let move4Cast = document.getElementById("move4Cast").value || 0;

    let moves = `&lt;moves>`;
    
    if(move1Name) {
        moves += `
        &lt;move name="${move1Name}" chanceToLearn="${move1Learn}" chanceToCast="${move1Cast}" />`;
    }

    moves += `
    &lt;/moves>`;

    // abilities
    let firstAbility = document.getElementById("firstAbility").value;
    let firstAbilityLearn = document.getElementById("firstAbilityLearn").value || 0;
    // let secondAbility = document.getElementById("secondAbility").value;
    // let secondAbilityLearn = document.getElementById("secondAbilityLearn").value || 0;

    let abilities = `&lt;abilities>`;
    
    if(firstAbility) {
        abilities += `
        &lt;ability name="${firstAbility}" chanceToLearn="${firstAbilityLearn}" />`;
    }

    // if(secondAbility) {
    //     abilities += `
    //     &lt;ability name="${secondAbility}" chanceToLearn="${secondAbilityLearn}" />`;
    // }

    abilities += `
    &lt;/abilities>`;

    // elements
    let elementNumber = document.getElementById("elementNumber").value;
    let elementDif = document.getElementById("elementDif").value;
    let elementPercent = document.getElementById("elementPercent").value;

    let elements = `&lt;elements>`;

    if(elementNumber) {
        elements += `
        &lt;element ${elementPercent}="${elementDif}${elementNumber}" />`;
    }

    elements += `
    &lt;/elements>`;

    // voices
    let voiceInterval = document.getElementById("voiceInterval").value || 0;
    let voiceChance = document.getElementById("voiceChance").value || 0;
    let voice = document.getElementById("voice").value;

    let voices = `&lt;voices`;
    
    if(voiceChance > 0) {
        voices += ` interval="${voiceInterval}" chance="${voiceChance}">
        &lt;voice name="${voice}" />`;
    } else {
        voices += `>`;
    }

    voices += `
    &lt;/voices>`;

    // loots
    let itemID = document.getElementById("itemID").value;
    let itemChance = document.getElementById("itemChance").value;

    let loot = `&lt;loot>`;
    
    if(itemID) {
        loot += `
        &lt;item id="${itemID}" chance="${itemChance}" />`;
    }

    loot += `
    &lt;/loot>`;

    // immunity
    let immunity = document.getElementById("immunity").value;

    let immunities = `&lt;immunities>`;
    
    if(immunity) {
        immunities += `
        &lt;immunity name="${immunity}" />`;
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
    ${loot}
    ${immunities}
&lt;/pokemon>`;
}

function copy() {
    const copyText = document.getElementById("code").textContent;
    const textArea = document.createElement('textarea');
    textArea.textContent = copyText;
    document.body.append(textArea);
    textArea.select();
    document.execCommand("copy");
}