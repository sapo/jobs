<?php

namespace SAPO\Jobs\Animals;

abstract class Animal
{
    private $name;

    private $breed;

    public function getAttributes(): array
    {
        return [
            'name'  => $this->name,
            'breed' => $this->breed,
        ];
    }

    public function setName(string $name): void
    {
        $this->name = $name;
    }

    public function setBreed(AnimalBreeds $type): void
    {
        $this->breed = $type;
    }
}