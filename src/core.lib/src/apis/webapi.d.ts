export declare enum WebHonorType {
    ALL = "all",
    TALKACTIVE = "talkative",
    PERFROMER = "performer",
    LEGEND = "legend",
    STORONGE_NEWBI = "strong_newbie",
    EMOTION = "emotion"
}
export interface WebApiGroupMember {
    uin: number;
    role: number;
    g: number;
    join_time: number;
    last_speak_time: number;
    lv: {
        point: number;
        level: number;
    };
    card: string;
    tags: string;
    flag: number;
    nick: string;
    qage: number;
    rm: number;
}
export interface WebApiGroupNoticeFeed {
    u: number;
    fid: string;
    pubt: number;
    msg: {
        text: string;
        text_face: string;
        title: string;
        pics?: {
            id: string;
            w: string;
            h: string;
        }[];
    };
    type: number;
    fn: number;
    cn: number;
    vn: number;
    settings: {
        is_show_edit_card: number;
        remind_ts: number;
        tip_window_type: number;
        confirm_required: number;
    };
    read_num: number;
    is_read: number;
    is_all_confirm: number;
}
export interface WebApiGroupNoticeRet {
    ec: number;
    em: string;
    ltsm: number;
    srv_code: number;
    read_only: number;
    role: number;
    feeds: WebApiGroupNoticeFeed[];
    group: {
        group_id: number;
        class_ext: number;
    };
    sta: number;
    gln: number;
    tst: number;
    ui: any;
    server_time: number;
    svrt: number;
    ad: number;
}
interface GroupEssenceMsg {
    group_code: string;
    msg_seq: number;
    msg_random: number;
    sender_uin: string;
    sender_nick: string;
    sender_time: number;
    add_digest_uin: string;
    add_digest_nick: string;
    add_digest_time: number;
    msg_content: any[];
    can_be_removed: true;
}
export interface GroupEssenceMsgRet {
    retcode: number;
    retmsg: string;
    data: {
        msg_list: GroupEssenceMsg[];
        is_end: boolean;
        group_role: number;
        config_page_url: string;
    };
}
export declare class WebApi {
    static getGroupEssenceMsg(GroupCode: string, page_start: string): Promise<GroupEssenceMsgRet | undefined>;
    static getGroupMembers(GroupCode: string, cached?: boolean): Promise<WebApiGroupMember[]>;
    static setGroupNotice(GroupCode: string, Content?: string): Promise<any>;
    static getGrouptNotice(GroupCode: string): Promise<undefined | WebApiGroupNoticeRet>;
    static genBkn(sKey: string): string;
    static getGroupHonorInfo(groupCode: string, getType: WebHonorType): Promise<any>;
}
export {};
