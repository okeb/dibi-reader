export default function FormatTime(seconds: number): string {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;

    const formattedHours = String(hours).padStart(2, '0');
    const formattedMinutes = String(minutes).padStart(2, '0');
    const formattedSeconds = String(remainingSeconds).padStart(2, '0');

    return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
}

export function GetFullName(abbr: string): string {
    const complet_list = [{
    "Ge. ": "Bereshit (Génèse)",
    "Ex. ": "Shemot (Exode)",
    "Lé. ": "Viyaqra (Lévitique)",
    "No. ": "Badmidbar (Nombres)",
    "De. ": "Davarim (Deutéronomes)",
    "Jos. ": "Yéhoshoua (Josué)",
    "Jg. ": "Shoftim (Juges)",
    "1 S. ": "1 Shemouél (1 Samuel)",
    "2 S. ": "2 Shemouél (2 Samuel)",
    "1 R. ": "1 Melakhim (1 Rois)",
    "2 R. ": "2 Melakhim (2 Rois)",
    "Es. ": "Yesha`yah (Ésaïe)",
    "Jé. ": "Yirmeyah (Jérémie)",
    "Ez. ": "Yehezkel (Ézéchiel)",
    "Os. ": "Hoshea (Osée)",
    "Joë. ": "Yoel (Joël)",
    "Am. ": "Amowc (Amos)",
    "Ab. ": "Obadyah (Abdias)",
    "Jon. ": "Yonah (Jonas)",
    "Mi. ": "Miykayah (Michée)",
    "Na. ": "Nachuwm (Nahum)",
    "Ha. ": "Habaqqouq (Habakuk)",
    "So. ": "Tsephanyah (Sophonie)",
    "Ag. ": "Chaggay (Aggée)",
    "Za. ": "Zakaryah (Zacharie)",
    "Mal. ": "Mal`akiy (Malachie)",
    "Ps. ": "Tehilim (Psaumes)",
    "Pr. ": "Mishlei (Proverbes)",
    "Job ": "Iyov (Job)",
    "Ca. ": "ShirHashirim (Cantiques des Cantiques)",
    "Ru. ": "Routh (Ruth)",
    "La. ": "Eikha (Lamentations de Jérémie)",
    "Ec. ": "Qohelet (Écclésiaste)",
    "Est. ": "Meguila Esther (Esther)",
    "Da. ": "Daniye'l (Daniel)",
    "Esd. ": "Ezra (Esdras)",
    "Né. ": "Nehemyah (Nehémie)",
    "1 Ch. ": "1 Hayyamim Dibre (1 Chroniques)",
    "2 Ch. ": "2 Hayyamim Dibre (2 Chroniques)",
    "Mt. ": "Matthaios (Matthieu)",
    "Mc. ": "Markos (Marc)",
    "Lu. ": "Loukas (Luc)",
    "Jn. ": "Yohanan (Jean)",
    "Ac. ": "Actes",
    "Ja. ": "Yaacov (Jacques)",
    "Ga. ": "Galates",
    "1 Th. ": "1 Thessaloniciens",
    "2 Th. ": "2 Thessaloniciens",
    "1 Co. ": "1 Corinthiens",
    "2 Co. ": "2 Corinthiens",
    "Ro. ": "Romains",
    "Ep. ": "Éphésiens",
    "Ph. ": "Philippiens",
    "Col. ": "Colossiens",
    "Phm. ": "Philémon",
    "1 Ti. ": "1 Timotheos (1 Timothée)",
    "Tit. ": "Titos (Tites)",
    "1 Pi. ": "1 Petros (1 Pierre)",
    "2 Pi. ": "2 Petros (2 Pierre)",
    "2 Ti. ": "2 Timotheos (2 Timothée)",
    "Jud. ": "Yéhouda (Jude)",
    "Hé. ": "Hébreux",
    "1 Jn. ": "1 Yohanan (1 Jean)",
    "2 Jn. ": "2 Yohanan (2 Jean)",
    "3 Jn. ": "3 Yohanan (3 Jean)",
    "Ap. ": "Apokalupsis (Apocalypse)",
    }];
    
    return complet_list[0][abbr]


}

