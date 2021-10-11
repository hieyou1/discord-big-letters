import copyToClipboard from "copy-to-clipboard";
const id = (eid) => {
    return document.getElementById(eid);
};
const small = "abcdefghijklmnopqrstuvwxyz1234567890-*/+".split("");
const big = ":regional_indicator_a: :regional_indicator_b: :regional_indicator_c: :regional_indicator_d: :regional_indicator_e: :regional_indicator_f: :regional_indicator_g: :regional_indicator_h: :regional_indicator_i: :regional_indicator_j: :regional_indicator_k: :regional_indicator_l: :regional_indicator_m: :regional_indicator_n: :regional_indicator_o: :regional_indicator_p: :regional_indicator_q: :regional_indicator_r: :regional_indicator_s: :regional_indicator_t: :regional_indicator_u: :regional_indicator_v: :regional_indicator_w: :regional_indicator_x: :regional_indicator_y: :regional_indicator_z: :one: :two: :three: :four: :five: :six: :seven: :eight: :nine: :zero: :heavy_minus_sign: :heavy_multiplication_x: :heavy_division_sign: :heavy_plus_sign:".split(" ");

window.onload = async () => {
    id("small").onkeyup = id("small").onpaste = () => {
        id("small").value = id("small").value.toLowerCase();
        for (let i of big) {
            if (id("small").value.includes(i)) {
                id("small").value = id("small").value.replace(new RegExp(i, "gi"), small[big.indexOf(i)]);
            }
        }
        let bigValue = "";
        for (let i of id("small").value) {
            if (!small.includes(i)) {
                id("small").value = id("small").value.replace(new RegExp(`\\${i}`, "gi"), "");
            } else {
                bigValue += `${big[small.indexOf(i)]} `;
            }
        }
        id("big").value = bigValue.trim();
    };
    id("copy-big").onclick = () => {
        copyToClipboard(id("big").value);
    };
    id("copy-small").onclick = () => {
        copyToClipboard(id("small").value);
    };
};