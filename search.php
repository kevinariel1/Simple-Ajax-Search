<?php

// Ambil nilai pencarian dari parameter GET
$searchTerm = $_GET['q'];

// Contoh data pencarian (biasanya data ini akan diambil dari database)
$sampleData = array("Apple", "Banana", "Orange", "Mango", "Grapes");

// Filter hasil pencarian berdasarkan input pengguna
$results = array_filter($sampleData, function ($item) use ($searchTerm) {
    return stripos($item, $searchTerm) !== false;
});

// Hapus nilai null dari array
$results = array_values(array_filter($results, function ($item) {
    return $item !== null;
}));

// Kembalikan hasil dalam format JSON
echo json_encode($results);
