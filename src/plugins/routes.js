import Devices from "@/components/Devices/Devices.vue";
import NotesList from "@/components/Notes/NotesList.vue";

export default [
    { path: '/notes', component: NotesList },
    { path: '/*', component: Devices },
];