function generateXML() {
    let code = document.getElementById("code");

    // info
    let pokemon = document.getElementById("pokemon").value;
    let number = document.getElementById("number").value;
    let description = document.getElementById("description").value;
    let exp = document.getElementById("exp").value;
    let catchRate = document.getElementById("catchRate").value;

    let type = document.getElementById("type").value;
    let corpse = document.getElementById("corpse").value;
    let charged = document.getElementById("charged").value;
    let discharged = document.getElementById("discharged").value;
    let portrait = document.getElementById("portrait").value;

    let spawn = document.getElementById("spawn").value;
    let targetChangeInterval = document.getElementById("targetChangeInterval").value;
    let targetChangeChance = document.getElementById("targetChangeChance").value;
    let weight = document.getElementById("weight").value;
    let height = document.getElementById("height").value;

    // shiny
    let shinyChance = document.getElementById("shinyChance").value;
    let shinyType = document.getElementById("shinyType").value;
    let shinyCorpse = document.getElementById("shinyCorpse").value;
    let shinyCharged = document.getElementById("shinyCharged").value;
    let shinyDischarged = document.getElementById("shinyDischarged").value;
    let shinyPortrait = document.getElementById("shinyPortrait").value;

    // evolution
    let evolutionAt = document.getElementById("evolutionAt").value;
    let evolutionTo = document.getElementById("evolutionTo").value;
    let stoneID = document.getElementById("stoneID").value;

    // types
    let firstType = document.getElementById("firstType").value;
    let secondType = document.getElementById("secondType").value;


    // genders
    let male = document.getElementById("male").value;
    let female = document.getElementById("female").value;

    // base stats
    let hp = document.getElementById("hp").value;
    let atk = document.getElementById("atk").value;
    let def = document.getElementById("def").value;
    let spatk = document.getElementById("spatk").value;
    let spdef = document.getElementById("spdef").value;
    let spd = document.getElementById("spd").value;

    // flags
    let pushable = document.getElementById("pushable").checked ? 1 : 0;
    let canpushitems = document.getElementById("canpushitems").checked ? 1 : 0;
    let canpushcreatures = document.getElementById("canpushcreatures").checked ? 1 : 0;
    let canwalkonenergy = document.getElementById("canwalkonenergy").checked ? 1 : 0;
    let canwalkonfire = document.getElementById("canwalkonfire").checked ? 1 : 0;
    let catchable = document.getElementById("catchable").checked ? 1 : 0;
    let attackable = document.getElementById("attackable").checked ? 1 : 0;
    let hostile = document.getElementById("hostile").checked ? 1 : 0;
    let illusionable = document.getElementById("illusionable").checked ? 1 : 0;
    let convinceable = document.getElementById("convinceable").checked ? 1 : 0;
    let targetdistance = document.getElementById("targetdistance").checked ? 1 : 0;
    let staticattack = document.getElementById("staticattack").value;
    let runonhealth = document.getElementById("runonhealth").value;

    // moves
    let move1Name = document.getElementById("move1Name").value;
    let move1Learn = document.getElementById("move1Learn").value;
    let move1Cast = document.getElementById("move1Cast").value;
    let move2Name = document.getElementById("move2Name").value;
    let move2Learn = document.getElementById("move2Learn").value;
    let move2Cast = document.getElementById("move2Cast").value;
    let move3Name = document.getElementById("move3Name").value;
    let move3Learn = document.getElementById("move3Learn").value;
    let move3Cast = document.getElementById("move3Cast").value;
    let move4Name = document.getElementById("move4Name").value;
    let move4Learn = document.getElementById("move4Learn").value;
    let move4Cast = document.getElementById("move4Cast").value;

    // abilities
    let firstAbility = document.getElementById("firstAbility").value;
    let firstAbilityLearn = document.getElementById("firstAbilityLearn").value;
    let secondAbility = document.getElementById("secondAbility").value;
    let secondAbilityLearn = document.getElementById("secondAbilityLearn").value;

    // elements
    let elementNumber = document.getElementById("elementNumber").value;
    let elementDif = document.getElementById("elementDif").value;
    let elementPercent = document.getElementById("elementPercent").value;

    // voices
    let voiceInterval = document.getElementById("voiceInterval").value;
    let voiceChance = document.getElementById("voiceChance").value;
    let voice1 = document.getElementById("voice1").value;
    let voice2 = document.getElementById("voice2").value;
    let voice3 = document.getElementById("voice3").value;

    // loots
    let itemID = document.getElementById("itemID").value;
    let itemChance = document.getElementById("itemChance").value;

    // immunity
    let immunity = document.getElementById("immunity").value;

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
    &lt;type first="${firstType}" second="${secondType}" />
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
    &lt;flags>
        &lt;flag pushable="${pushable}" />
        &lt;flag canpushitems="${canpushitems}" />
        &lt;flag canpushcreatures="${canpushcreatures}" />
        &lt;flag canwalkonenergy="${canwalkonenergy}" />
        &lt;flag canwalkonfire="${canwalkonfire}" />
        &lt;flag catchable="${catchable}" />
        &lt;flag attackable="${attackable}" />
        &lt;flag hostile="${hostile}" />
        &lt;flag illusionable="${illusionable}" />
        &lt;flag convinceable="${convinceable}" />
        &lt;flag targetdistance="${targetdistance}" />
        &lt;flag staticattack="${staticattack}" />
        &lt;flag runonhealth="${runonhealth}" />
    &lt;/flags>
    &lt;moves>
        &lt;move name="${move1Name}" chanceToLearn="${move1Learn}" chanceToCast="${move1Cast}" />
        &lt;move name="${move2Name}" chanceToLearn="${move2Learn}" chanceToCast="${move2Cast}" />
        &lt;move name="${move3Name}" chanceToLearn="${move3Learn}" chanceToCast="${move3Cast}" />
        &lt;move name="${move4Name}" chanceToLearn="${move4Learn}" chanceToCast="${move4Cast}" />
    &lt;/moves>
    &lt;abilities>
        &lt;ability name="${firstAbility}" chanceToLearn="${firstAbilityLearn}" />
        &lt;ability name="${secondAbility}" chanceToLearn="${secondAbilityLearn}" />
    &lt;/abilities>
    &lt;elements>
        &lt;element ${elementPercent}="${elementDif}${elementNumber}" />
    &lt;/elements>
    &lt;voices interval="${voiceInterval}" chance="${voiceChance}">
        &lt;voice sentence="${voice1}" />
        &lt;voice sentence="${voice2}" />
        &lt;voice sentence="${voice3}" />
    &lt;/voices>
    &lt;loot>
        &lt;item id="${itemID}" chance="${itemChance}" />
    &lt;/loot>
    &lt;immunities>
        &lt;immunity name="${immunity}" />
    &lt;/immunities>
&lt;/pokemon>`;
};