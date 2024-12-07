'use strict';

/**
 * Configuration for controlling the visibility of buttons in the MiroTalk P2P client.
 * Set properties to true to show the corresponding buttons, or false to hide them.
 * captionBtn, showSwapCameraBtn, showScreenShareBtn, showFullScreenBtn, showVideoPipBtn, showDocumentPipBtn -> (auto-detected).
 */
const buttons = {
    main: {
        showShareRoomBtn: false,
        showHideMeBtn: false,
        showAudioBtn: true,
        showVideoBtn: false,
        showScreenBtn: false,
        showRecordStreamBtn: false,
        showChatRoomBtn: true,
        showCaptionRoomBtn: false,
        showRoomEmojiPickerBtn: true,
        showMyHandBtn: false,
        showWhiteboardBtn: false,
        showSnapshotRoomBtn: false,
        showFileShareBtn: false,
        showDocumentPipBtn: showDocumentPipBtn,
        showMySettingsBtn: false,
        showAboutBtn: true, // Please keep me always true, Thank you!
    },
    chat: {
        showTogglePinBtn: false,
        showMaxBtn: true,
        showSaveMessageBtn: true,
        showMarkDownBtn: false,
        showChatGPTBtn: false,
        showFileShareBtn: false,
        showShareVideoAudioBtn: false,
        showParticipantsBtn: true,
    },
    caption: {
        showTogglePinBtn: false,
        showMaxBtn: false,
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
        showSnapShotBtn: false,
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
