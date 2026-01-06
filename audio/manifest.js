// manifest.js
window.MANIFEST_RAW = [
  {
    id: "utt_0001",
    gt_id: "utt_0001",
    gt_url: "audio/real/C0/utt_0001.wav",
    gen_url: "audio/generated/C0/Encodec_24kHz/utt_0001.wav",
    condition: "C0",                 // ✅ dataset name now
    codec: "Encodec_24kHz",
    split: "test",
    protocol: "seen",
    speaker_id: "spk_001",
    codec_family: "Encodec"
  },
  {
    id: "utt_0042",
    gt_id: "utt_0042",
    gt_url: "audio/real/C1/utt_0042.wav",
    gen_url: "audio/generated/C1/SpeechTokenizer/utt_0042.wav",
    condition: "C1",                 // ✅ dataset name now
    codec: "SpeechTokenizer",
    split: "val",
    protocol: "unseen",
    speaker_id: "spk_019",
    codec_family: "Tokenizer"
  },
  {
    id: "utt_0107",
    gt_id: "utt_0107",
    gt_url: "audio/real/C2/utt_0107.wav",
    gen_url: "audio/generated/C2/SNAC_44kHz/utt_0107.wav",
    condition: "C2",                 // ✅ dataset name now
    codec: "SNAC_44kHz",
    split: "test",
    protocol: "seen",
    speaker_id: "spk_203",
    codec_family: "SNAC"
  }
];
