export const formatElapsedTime = (sec: number) => {
    const year = Math.floor(sec / (60 * 60 * 24 * 365));
    const month = Math.floor(sec / (60 * 60 * 24 * (365 / 12))); // koko wakaran
    const day = Math.floor(sec / (60 * 60 * 24));
    const hour = Math.floor(sec / (60 * 60));
    const min = Math.floor(sec / 60);
    return (
        (year && `${year}y`) ||
        (month && `${month}m`) ||
        (day && `${day}d`) ||
        (hour && `${hour}h`) ||
        (min && `${min}m`) ||
        `${sec}s`
    );
};

const mods = {
    NM: 0,
    NF: 1 << 0,
    EZ: 1 << 1,
    TS: 1 << 2,
    HD: 1 << 3,
    HR: 1 << 4,
    SD: 1 << 5,
    DT: 1 << 6,
    RX: 1 << 7,
    HT: 1 << 8,
    NC: 1 << 9,
    FL: 1 << 10,
    AT: 1 << 11,
    SO: 1 << 12,
    AP: 1 << 13,
    PF: 1 << 14,
    "4K": 1 << 15,
    "5K": 1 << 16,
    "6K": 1 << 17,
    "7K": 1 << 18,
    "8K": 1 << 19,
    FI: 1 << 20,
    RD: 1 << 21,
    CN: 1 << 22,
    TP: 1 << 23,
    "9K": 1 << 24,
    CO: 1 << 25,
    "1K": 1 << 26,
    "3K": 1 << 27,
    "2K": 1 << 28,
    V2: 1 << 29,
    MR: 1 << 30,
};

export const formatMods = (modsFlag: number) => {
    const modsArr = new Array<string>();
    Object.entries(mods).forEach(([k, v]) => {
        if (modsFlag & v) modsArr.push(k);
    });
    return modsArr.length ? `+${modsArr.join(",")}` : "";
};