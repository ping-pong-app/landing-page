import { library, IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { faGithub, faTwitter, faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faArrowRight, faArrowLeft, faHeartbeat } from "@fortawesome/free-solid-svg-icons";

export function loadIcons() {
    const icons: IconDefinition[] = [
        faGithub,
        faTwitter,
        faFacebook,
        faArrowRight,
        faArrowLeft,
        faArrowRight,
        faHeartbeat
    ];
    icons.forEach(icon => {
        library.add(icon);
    });
}
