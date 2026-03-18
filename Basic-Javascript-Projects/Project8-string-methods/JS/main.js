function Complete_Sentence() {
    var part_1 = "This is ";
    var part_2 = "writing a ";
    var part_3 = "sentence the ";
    var part_4 = "hard way.";
    var whole_sentence = part_1.concat(part_2, part_3, part_4);
    document.getElementById("Concatenate").innerHTML = whole_sentence;
}

function slice_Method() {
    var Sentence = "There is something special about knowing you are hiding a secret...";
    var Section = Sentence.slice(58,67);
    document.getElementById("slice").innerHTML = Section;
}