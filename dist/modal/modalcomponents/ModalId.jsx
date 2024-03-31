import share from "../../image/share.png";
import rename from "../../image/namechange.png";
import Delete from "../../image/delete.png";
export const MODALS_ID = {
    addFolder: "addFolder",
    share: "share",
    rename: "rename",
    delete: "delete",
};
export const BUTTONS = [
    {
        iconSource: share,
        text: "공유",
        modalId: MODALS_ID.share,
    },
    {
        iconSource: rename,
        text: "이름 변경",
        modalId: MODALS_ID.rename,
    },
    {
        iconSource: Delete,
        text: "삭제",
        modalId: MODALS_ID.delete,
    },
];
