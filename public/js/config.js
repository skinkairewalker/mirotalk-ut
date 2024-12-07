'use strict';

/**
 * Configuration for controlling the visibility of buttons in the MiroTalk P2P client.
 * Set properties to true to show the corresponding buttons, or false to hide them.
 * captionBtn, showSwapCameraBtn, showScreenShareBtn, showFullScreenBtn, showVideoPipBtn, showDocumentPipBtn -> (auto-detected).
 */
const buttons = {
    main: {
        showShareRoomBtn: false,
        showHideMeBtn: true,
        showAudioBtn: true,
        showVideoBtn: false,
        showScreenBtn: true,
        showRecordStreamBtn: true,
        showChatRoomBtn: true,
        showCaptionRoomBtn: true,
        showRoomEmojiPickerBtn: true,
        showMyHandBtn: false,
        showWhiteboardBtn: false,
        showSnapshotRoomBtn: true,
        showFileShareBtn: false,
        showDocumentPipBtn: showDocumentPipBtn,
        showMySettingsBtn: true,
        showAboutBtn: true, // Please keep me always true, Thank you!
    },
    chat: {
        showTogglePinBtn: true,
        showMaxBtn: true,
        showSaveMessageBtn: true,
        showMarkDownBtn: true,
        showChatGPTBtn: false,
        showFileShareBtn: false,
        showShareVideoAudioBtn: false,
        showParticipantsBtn: true,
    },
    caption: {
        showTogglePinBtn: true,
        showMaxBtn: true,
    },
    settings: {
        showMicOptionsBtn: true,
        showTabRoomPeerName: true,
        showTabRoomParticipants: true,
        showTabRoomSecurity: true,
        showTabEmailInvitation: false,
        showMuteEveryoneBtn: true,
        showHideEveryoneBtn: true,
        showEjectEveryoneBtn: false,
        showLockRoomBtn: false,
        showUnlockRoomBtn: false,
    },
    remote: {
        showAudioVolume: true,
        audioBtnClickAllowed: true,
        videoBtnClickAllowed: false,
        showKickOutBtn: true,
        showSnapShotBtn: true,
        showFileShareBtn: false,
        showShareVideoAudioBtn: false,
        showPrivateMessageBtn: true,
        showZoomInOutBtn: false,
        showVideoFocusBtn: false,
        showVideoPipBtn: showVideoPipBtn,
    },
    local: {
        showSnapShotBtn: true,
        showVideoCircleBtn: false,
        showZoomInOutBtn: false,
        showVideoPipBtn: showVideoPipBtn,
    },
    whiteboard: {
        whiteboardLockBtn: false,
    },
};
