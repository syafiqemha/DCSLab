<?php

use Illuminate\Support\Facades\Broadcast;
use Vinkla\Hashids\Facades\Hashids;

Broadcast::channel('channel-{hId}', function ($user, $hId) {
    return (int) $user->id === (int) (Hashids::decode($hId)[0]);
});

Broadcast::channel('public-channel', function () {
    return true;
});